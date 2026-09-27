import { Container } from "@/components/ui/Container";
import { LayersIcon, ShieldCheckIcon, ValueIcon } from "@/components/ui/icons";
import { about } from "@/content/site";

import styles from "./About.module.css";

function Lead() {
  const at = about.lead.indexOf(about.leadName);
  if (at === -1) return <>{about.lead}</>;

  return (
    <>
      {about.lead.slice(0, at)}
      <strong className={styles.name}>{about.leadName.replace("PPMA SAC", "PPMA\u00a0SAC")}</strong>
      {about.lead.slice(at + about.leadName.length)}
    </>
  );
}

const points = [
  { icon: ShieldCheckIcon, text: about.commitment },
  { icon: LayersIcon, text: about.scope },
];

export function About() {
  return (
    <section className={styles.about} id="nosotros" aria-labelledby="nosotros-title">
      <Container>
        <div className={styles.intro} data-reveal>
          <h2 id="nosotros-title" className={styles.title}>
            {about.heading.map((line) => (
              <span className={styles.titleLine} key={line}>
                {line}
              </span>
            ))}
          </h2>
          <div className={styles.introGrid}>
            <p className={styles.lead}>
              <Lead />
            </p>
            <ul className={styles.points}>
              {points.map(({ icon: Icon, text }) => (
                <li className={styles.point} key={text}>
                  <span className={styles.pointIcon}>
                    <Icon />
                  </span>
                  <p className={styles.pointText}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.purpose} data-reveal>
          {about.pillars.map((pillar) => (
            <div className={styles.pillar} key={pillar.title}>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarText}>{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className={styles.values}>
          <h3 className={`${styles.subTitle} ${styles.valuesTitle}`} data-reveal>
            {about.valuesTitle}
          </h3>
          <ul className={styles.valueList} data-reveal-group>
            {about.values.map((value) => (
              <li className={styles.value} key={value.title}>
                <span className={styles.valueIcon}>
                  <ValueIcon name={value.icon} />
                </span>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueText}>{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
