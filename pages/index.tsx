import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Banner from "@/components/Banner";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>wujinhjun-website</title>
      </Head>

      <main className={styles.main}>
        <Banner />
        <HomeContent />
      </main>
    </>
  );
}
