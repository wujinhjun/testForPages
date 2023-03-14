import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HomeContent.module.scss";
import Link from "next/link";
import { ICard, IHomeContent } from "@/utils/types";

const SecondTitle = ({ text }: { text: string }) => {
  return (
    <div className={styles.sectionTitleWrapper}>
      <span className={styles.sectionTitle}>{text}</span>
      <span className={styles.line}></span>
    </div>
  );
};

const ContentCard = ({ pic, tech, src, header, description }: ICard) => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.background}>
        <Image alt="dev" src={pic} width={400} height={225}></Image>
      </div>
      <div className={styles.intro}>
        <div className={styles.introText}>
          <Link href={src} className={styles.introHeader}>
            {header}
          </Link>
          <div className={styles.introContent}>
            <span className={styles.introDesc}>{description}</span>
            <span className={styles.introTech}>{tech}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomeContent({ production }: IHomeContent) {
  return (
    <section className={styles.contentsWrapper}>
      <div id="title" className={styles.titleWrapper}>
        <span className={styles.title}>我的作品</span>
      </div>
      <section className={styles.contentWrapper}>
        <SecondTitle text="开发"></SecondTitle>
        <section className={styles.cards}>
          {production.map((item, index) => {
            const { src, pic, header, description, tech } = item;
            return (
              <ContentCard
                key={index}
                src={src}
                pic={pic}
                header={header}
                description={description}
                tech={tech}
              />
            );
          })}
        </section>
      </section>
      <div style={{ height: 800 }}></div>
    </section>
  );
}
