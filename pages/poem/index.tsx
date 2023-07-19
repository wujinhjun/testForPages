import { getAllPostDataContent, getPostsIDs } from '@/lib/poemLib'
import PoemDisplay from '@/components/PoemDisplay'
import styles from '@/styles/Home.module.scss'
import { NextSeo } from 'next-seo'

import type { IPoem, ICatalogs } from '@/utils/types'
import Header from '@/components/Header'
import useScrollTop from '@/hooks/useScrollTop'

export default function Poem({ allPostsData }: IPoem) {
  //   console.log(allPostsData);
  const scrollTop = useScrollTop()

  const catalogs: ICatalogs[] = allPostsData.map((item) => {
    return { id: item.id, title: item.title as string }
  })

  return (
    <>
      <NextSeo title='诗意' />
      <section className={`header-fixed ${scrollTop ? 'sticky' : ''}`}>
        <Header name='poem' />
      </section>
      <main className={styles.main}>
        <PoemDisplay catalogs={catalogs} contents={allPostsData}></PoemDisplay>
      </main>
    </>
  )
}

export async function getStaticProps() {
  //   const allPostsData = getPostsIDs();
  const allPostsData = await getAllPostDataContent()
  return {
    props: {
      allPostsData,
    },
  }
}
