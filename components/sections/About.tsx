import { Container } from "@/components/ui/Container";
import { LayersIcon, ShieldCheckIcon } from "@/components/ui/icons";
import { about } from "@/content/site";

import styles from "./About.module.css";
import { ValuesWheel } from "./ValuesWheel";

function Lead({ text }: { text: string }) {
  const at = text.indexOf(about.leadName);
  if (at === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, at)}
      <strong className={styles.name}>{about.leadName.replace("PPMA SAC", "PPMA\u00a0SAC")}</strong>
      {text.slice(at + about.leadName.length)}
    </>
  );
}

const points = [
  { icon: ShieldCheckIcon, title: about.commitmentTitle, text: about.commitment },
  { icon: LayersIcon, title: about.scopeTitle, text: about.scope },
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
          <div className={styles.introBody}>
            {about.lead.map((text) => (
              <p className={styles.lead} key={text}>
                <Lead text={text} />
              </p>
            ))}
            <ul className={styles.points}>
              {points.map(({ icon: Icon, title, text }) => (
                <li className={styles.point} key={title}>
                  <h3 className={styles.pointTitle}>
                    <span className={styles.pointIcon}>
                      <Icon />
                    </span>
                    {title}
                  </h3>
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
          <ValuesWheel values={about.values} />
        </div>
      </Container>
    </section>
  );
}
