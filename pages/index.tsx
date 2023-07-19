import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import HeaderStyles from '@/styles/Header.module.scss'
import Banner from '@/components/Banner'
import HomeContent from '@/components/HomeContent'
import type { IHome } from '@/utils/types'
import { getHomeContentData } from '@/lib/content'
import Header from '@/components/Header'
import useScrollTop from '@/hooks/useScrollTop'

export default function Home({ introduction, project }: IHome) {
  const scrollTop = useScrollTop()

  return (
    <>
      <Head>
        <title>wujinhjun-website</title>
      </Head>
      <section className={`header-fixed ${scrollTop ? 'sticky' : ''}`}>
        <Header name='home' />
      </section>
      <main className={styles.main}>
        <Banner contents={introduction} />
        <HomeContent production={project} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const bannerData = await getHomeContentData('homepage')
  const projectionData = await getHomeContentData('project')
  return {
    props: {
      introduction: bannerData,
      project: projectionData,
    },
  }
}
