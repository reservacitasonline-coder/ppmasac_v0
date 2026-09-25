import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/site";
import { cn } from "@/lib/cn";

import styles from "./ServiceGroups.module.css";

/** Enough bullets that a single column starts to feel like a scroll wall. */
const DENSE_AT = 12;

/** Splits a "Lead: detail" bullet; `lead` is empty when there is no colon. */
function splitLead(text: string) {
  const split = text.indexOf(": ");
  return split === -1
    ? { lead: "", detail: text }
    : { lead: text.slice(0, split), detail: text.slice(split + 2) };
}

/** Sets `*text*` spans (foreign terms such as *Business Plan*) in italics. */
function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*([^*]+)\*/).map((part, index) =>
        index % 2 ? <em key={index}>{part}</em> : part,
      )}
    </>
  );
}

/** Sets the "Lead:" of a categorised bullet in bold. */
function CategoryItem({ text }: { text: string }) {
  const { lead, detail } = splitLead(text);
  if (!lead) return <>{detail}</>;

  return (
    <>
      <strong className={styles.categoryLead}>{`${lead}:`}</strong> {detail}
    </>
  );
}

/** The six service lines in full, one band each. */
export function ServiceGroups() {
  const { closing } = services.page;

  return (
    <>
      <div className={styles.groups}>
        {services.groups.map((group) => {
          const items = group.items ?? [];
          const tiled = group.layout === "tiles";
          const timeline = group.layout === "timeline";
          const panel = group.layout === "panel";
          // A lone "Lead:" among plain bullets stays inline rather than
          // becoming the only heading in the list.
          const allLeads = items.every((item) => splitLead(item).lead);
          const dense = !group.layout && items.length >= DENSE_AT;
          const titleLines = group.title.split("\n");

          return (
            <section
              className={cn(
                styles.group,
                dense && styles.dense,
                (tiled || panel) && styles.tiled,
                timeline && styles.sequenced,
              )}
              id={group.slug}
              key={group.slug}
              aria-labelledby={`${group.slug}-title`}
            >
              <Container>
                <div className={styles.head} data-reveal>
                  <span className={styles.index}>{group.index}</span>
                  <h2 className={styles.title} id={`${group.slug}-title`}>
                    {titleLines.map((line) => (
                      <span
                        className={cn(
                          styles.titleLine,
                          titleLines.length > 1 && styles.titleLineKept,
                        )}
                        key={line}
                      >
                        {line}
                      </span>
                    ))}
                  </h2>
                  {dense ? (
                    <p className={styles.summary}>{group.summary}</p>
                  ) : null}
                </div>

                <div className={styles.body} data-reveal-group>
                  <figure className={styles.figure}>
                    <Image
                      className={styles.image}
                      src={group.photo.src}
                      alt={group.photo.alt}
                      fill
                      sizes={
                        dense
                          ? "(max-width: 900px) 100vw, 32vw"
                          : "(max-width: 900px) 100vw, 40vw"
                      }
                    />
                  </figure>

                  <div className={styles.copy}>
                    {dense ? null : (
                      <p className={styles.summary}>{group.summary}</p>
                    )}
                    {items.length > 0 && !group.layout ? (
                      <ul className={styles.items}>
                        {items.map((item) => (
                          <li className={styles.item} key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {timeline ? (
                      <ul className={styles.timeline}>
                        {items.map((item) => {
                          const { lead, detail } = splitLead(item);
                          return (
                            <li className={styles.step} key={item}>
                              {lead ? (
                                <h3 className={styles.stepTitle}>{lead}</h3>
                              ) : null}
                              <p className={styles.stepText}>
                                <Emphasis text={detail} />
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                    {group.note ? (
                      <p className={styles.note}>{group.note}</p>
                    ) : null}
                  </div>
                </div>

                {tiled ? (
                  <ul className={styles.tiles} data-reveal-group>
                    {items.map((item) => {
                      const { lead, detail } = splitLead(item);
                      return (
                        <li className={styles.tile} key={item}>
                          {lead ? (
                            <h3 className={styles.tileTitle}>{lead}</h3>
                          ) : null}
                          <p className={styles.tileText}>
                            <Emphasis text={detail} />
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}

                {panel ? (
                  <div
                    className={cn(
                      styles.panel,
                      !group.itemsLabel && styles.panelBare,
                    )}
                    data-reveal
                  >
                    {group.itemsLabel ? (
                      <p className={styles.panelLabel}>{group.itemsLabel}</p>
                    ) : null}
                    <ul className={styles.panelItems}>
                      {items.map((item) => {
                        const { lead, detail } = splitLead(item);
                        return (
                          <li className={styles.panelItem} key={item}>
                            {allLeads ? (
                              <>
                                <h3 className={styles.tileTitle}>{lead}</h3>
                                <p className={styles.tileText}>
                                  <Emphasis text={detail} />
                                </p>
                              </>
                            ) : (
                              <p className={styles.panelPlain}>
                                <CategoryItem text={item} />
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}

                {group.categories ? (
                  <div className={styles.categories} data-reveal-group>
                    {group.categories.map((category, index) => (
                      <div className={styles.category} key={category.title}>
                        <h3 className={styles.categoryTitle}>
                          <span className={styles.categoryIndex}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {category.title}
                        </h3>
                        <ul className={styles.categoryItems}>
                          {category.items.map((item) => (
                            <li className={styles.item} key={item}>
                              <CategoryItem text={item} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </Container>
            </section>
          );
        })}
      </div>

      <section className={styles.closing}>
        <Container className={styles.closingInner}>
          <div>
            <h2 className={styles.closingTitle}>{closing.title}</h2>
            <p className={styles.closingText}>{closing.body}</p>
          </div>
          <Button href={closing.cta.href} variant="light">
            {closing.cta.label}
          </Button>
        </Container>
      </section>
    </>
  );
}
