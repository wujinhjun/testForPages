import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Layout from "@/components/Layou";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wujinhjun-website</title>
      </Head>

      <main className={styles.main}>
        <Banner />
      </main>
    </>
  );
}
