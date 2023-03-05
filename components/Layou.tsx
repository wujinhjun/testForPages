import Head from "next/head";
import Header from "./Header";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The webpage for wujinhjun to display"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={styles.header_section}>
        <Header />
      </section>

      <>
        {children}
        <div className={styles.back_triangle}></div>
      </>
    </>
  );
}
