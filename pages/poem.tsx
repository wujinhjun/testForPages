import { getAllPostDataContent, getPostsIDs } from "@/lib/poemLib";
import PoemDisplay from "@/components/PoemDisplay";
import styles from "@/styles/Home.module.scss";

import type { IPoem, ICatalogs } from "@/lib/types";

export default function Poem({ allPostsData }: IPoem) {
  //   console.log(allPostsData);

  const catalogs: ICatalogs[] = allPostsData.map((item) => {
    return { id: item.id, title: item.title as string };
  });

  return (
    <main className={styles.main}>
      <PoemDisplay catalogs={catalogs} contents={allPostsData}></PoemDisplay>
    </main>
  );
}

export async function getStaticProps() {
  //   const allPostsData = getPostsIDs();
  const allPostsData = await getAllPostDataContent();
  return {
    props: {
      allPostsData,
    },
  };
}
