import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import HeaderStyles from '@/styles/Header.module.scss'
import Banner from '@/components/Banner'
import HomeContent from '@/components/HomeContent'
import type { IHome } from '@/utils/types'
import { getHomeContentData } from '@/utils/content'
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
        {/* <Banner contents={introduction} /> */}
        <section className={`${styles.banner} flex mb-16`}>
          <div className={styles.banner_wrapper}>
            <div className={styles.banner_img_container}>
              <div className={styles.banner_img_background}>
                <img src={introduction[0].src} alt='' />
              </div>
            </div>
            <div className={`flex justify-center gap-6 pt-6`}>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
          <div className={styles.banner_text_container}>
            <pre className={styles.banner_text_header}>
              {introduction[0].header}
            </pre>
            <pre className={styles.banner_text_content}>
              {introduction[0].content}
            </pre>
          </div>
        </section>

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
