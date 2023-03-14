import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Banner from "@/components/Banner";
import HomeContent from "@/components/HomeContent";
import type { IHome } from "@/utils/types";
import { getHomeContentData } from "@/lib/content";

export default function Home({ introduction, project }: IHome) {
  return (
    <>
      <Head>
        <title>wujinhjun-website</title>
      </Head>

      <main className={styles.main}>
        <Banner contents={introduction} />
        <HomeContent production={project} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const bannerData = await getHomeContentData("homepage");
  const projectionData = await getHomeContentData("project");
  return {
    props: {
      introduction: bannerData,
      project: projectionData,
    },
  };
}
