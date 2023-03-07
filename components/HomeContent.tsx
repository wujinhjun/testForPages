import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HomeContent.module.scss";
import Link from "next/link";
import type { Url } from "next/dist/shared/lib/router/router";

interface ICard {
  backSrc?: string;
  src?: Url;
  header?: string;
  description?: string;
  tech?: string;
}

const SecondTitle = ({ text }: { text: string }) => {
  return (
    <div className={styles.sectionTitleWrapper}>
      <span className={styles.sectionTitle}>{text}</span>
      <span className={styles.line}></span>
    </div>
  );
};

const ContentCard = ({ backSrc, src, header, description, tech }: ICard) => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.background}>
        <Image
          alt="dev"
          src="/assets/dev1.png"
          width={400}
          height={225}
        ></Image>
      </div>
      <div className={styles.intro}>
        <div className={styles.introText}>
          <Link
            href={"https://kool-kool.github.io/kool-ui"}
            className={styles.introHeader}
          >
            Kool UI组件库
          </Link>
          <div className={styles.introContent}>
            <span className={styles.introDesc}>react 组件库</span>
            <span className={styles.introTech}>
              typescript+react+dumi+rollup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomeContent() {
  return (
    <section className={styles.contentsWrapper}>
      <div id="title" className={styles.titleWrapper}>
        <span className={styles.title}>我的作品</span>
      </div>
      <section className={styles.contentWrapper}>
        <SecondTitle text="开发"></SecondTitle>
        <section className={styles.cards}>
          <ContentCard></ContentCard>
          <ContentCard></ContentCard>
          <ContentCard></ContentCard>
        </section>
      </section>
      <div style={{ height: 800 }}></div>
    </section>
  );
}
