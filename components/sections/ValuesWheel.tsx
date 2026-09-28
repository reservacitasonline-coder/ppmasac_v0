"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

import { ValueIcon } from "@/components/ui/icons";
import type { CompanyValue } from "@/content/types";

import styles from "./ValuesWheel.module.css";

/** Radii on the SVG's 200-unit grid, centred on the origin. */
const OUTER = 98;
const INNER = 46;
const BAND = 58;
/** Where the icons sit, as a share of the wheel's width from its centre. */
const ICON_RADIUS = ((BAND + OUTER) / 2 / 200) * 100;

const toRad = (degrees: number) => (degrees * Math.PI) / 180;

/** A point at `radius` and `angle`, measured clockwise from twelve o'clock. */
function polar(radius: number, angle: number) {
  const a = toRad(angle);
  return `${(radius * Math.sin(a)).toFixed(3)} ${(-radius * Math.cos(a)).toFixed(3)}`;
}

function ringSlice(from: number, to: number, outer: number, inner: number) {
  return [
    `M ${polar(outer, from)}`,
    `A ${outer} ${outer} 0 0 1 ${polar(outer, to)}`,
    `L ${polar(inner, to)}`,
    `A ${inner} ${inner} 0 0 0 ${polar(inner, from)}`,
    "Z",
  ].join(" ");
}

/**
 * One blue per slice, from the page's mist at the top of the wheel to a
 * blue deeper than the brand's at the foot, leaning cyan on the left and
 * indigo on the right so neighbours never match.
 */
function tones(angle: number) {
  const a = toRad(angle);
  const lift = (Math.cos(a) + 1) / 2;
  const lightness = 0.4 + lift * 0.34;
  const hue = 264 - lift * 26 + Math.sin(a) * 14;
  return {
    fill: `oklch(${lightness.toFixed(3)} 0.14 ${hue.toFixed(1)})`,
    name: `oklch(${Math.max(lightness + 0.2, 0.86).toFixed(3)} 0.09 ${hue.toFixed(1)})`,
  };
}

/**
 * The seven corporate values as a segmented ring: each slice carries its
 * icon, and the name and description sit beside it, following the curve of
 * the wheel. Hovering a slice or its text brings that value forward. On
 * narrow screens the text drops into a list under the wheel.
 */
export function ValuesWheel({ values }: { values: readonly CompanyValue[] }) {
  const [active, setActive] = useState<number | null>(null);
  const step = 360 / values.length;

  const slices = values.map((value, index) => {
    const from = (index - 1) * step;
    const mid = (((index - 0.5) * step) % 360 + 360) % 360;
    return { value, index, from, to: from + step, mid, ...tones(mid) };
  });

  // A slice centred at the foot gets its text right under it; the rest split
  // into two columns, read top to bottom on either side.
  const atFoot = (s: (typeof slices)[number]) => Math.abs(s.mid - 180) < 1;
  const right = slices.filter((s) => s.mid > 0.5 && s.mid < 179.5);
  const left = slices
    .filter((s) => !right.includes(s) && !atFoot(s))
    .sort((a, b) => b.mid - a.mid);

  type Side = "left" | "right" | "bottom";
  const place = new Map<number, { side: Side; x: number; y: number }>();
  slices.filter(atFoot).forEach((s) => place.set(s.index, { side: "bottom", x: 0, y: 0 }));
  for (const [side, column] of [
    ["right", right],
    ["left", left],
  ] as const) {
    column.forEach((s, k) => {
      const y = column.length > 1 ? -0.72 + (1.44 * k) / (column.length - 1) : 0;
      const x = Math.sqrt(Math.max(0, 1.06 ** 2 - y ** 2));
      place.set(s.index, { side, x, y });
    });
  }

  const hover = (index: number | null) => () => setActive(index);

  return (
    <div
      className={styles.stage}
      data-reveal
      data-has-active={active !== null ? "true" : undefined}
    >
      <div className={styles.wheel} aria-hidden="true">
        <svg className={styles.ring} viewBox="-100 -100 200 200">
          <circle className={styles.halo} r={OUTER + 1.5} />
          {slices.map((s) => {
            const lift = toRad(s.mid);
            return (
              <g
                key={s.value.title}
                className={styles.slice}
                data-active={active === s.index ? "true" : undefined}
                style={
                  {
                    "--i": s.index,
                    "--dx": `${(Math.sin(lift) * 4).toFixed(2)}px`,
                    "--dy": `${(-Math.cos(lift) * 4).toFixed(2)}px`,
                  } as CSSProperties
                }
                onMouseEnter={hover(s.index)}
                onMouseLeave={hover(null)}
              >
                <path d={ringSlice(s.from, s.to, OUTER, INNER)} fill={s.fill} />
                <path className={styles.band} d={ringSlice(s.from, s.to, BAND, INNER)} />
              </g>
            );
          })}
          <circle className={styles.hub} r={INNER - 4} />
        </svg>

        {slices.map((s) => (
          <span
            key={s.value.title}
            className={styles.icon}
            data-active={active === s.index ? "true" : undefined}
            style={
              {
                "--i": s.index,
                left: `${50 + Math.sin(toRad(s.mid)) * ICON_RADIUS}%`,
                top: `${50 - Math.cos(toRad(s.mid)) * ICON_RADIUS}%`,
              } as CSSProperties
            }
          >
            <ValueIcon name={s.value.icon} />
          </span>
        ))}
      </div>

      <ul className={styles.labels}>
        {slices.map((s) => {
          const spot = place.get(s.index)!;
          return (
            <li
              key={s.value.title}
              className={styles.label}
              data-side={spot.side}
              data-active={active === s.index ? "true" : undefined}
              style={
                {
                  "--i": s.index,
                  "--x": spot.x.toFixed(3),
                  "--y": spot.y.toFixed(3),
                  "--tone": s.fill,
                  "--name": s.name,
                } as CSSProperties
              }
              onMouseEnter={hover(s.index)}
              onMouseLeave={hover(null)}
            >
              <span className={styles.chip} aria-hidden="true">
                <ValueIcon name={s.value.icon} />
              </span>
              <h4 className={styles.name}>{s.value.title}</h4>
              <p className={styles.text}>{s.value.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
