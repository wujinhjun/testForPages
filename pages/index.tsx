import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import HomeContent from '@/components/HomeContent'
import type { IHome } from '@/utils/types'
import { getHomeContentData } from '@/utils/content'
import Header from '@/components/Header'
import useScrollTop from '@/hooks/useScrollTop'
import { useEffect, useMemo, useRef, useState } from 'react'

const animationDurationTime = 500

export default function Home({ introduction, project }: IHome) {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [previousIndex, setPreviousIndex] = useState(currentIndex)
  const [slideDirection, setSlideDirection] = useState<
    'negative' | 'positive' | null
  >(null)
  const [switching, setSwitching] = useState(false)
  const animationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const bannerSize = useMemo(() => {
    return introduction.length
  }, [introduction])

  const scrollTop = useScrollTop()

  const getIndex = (index: number): number => {
    return (bannerSize + index) % bannerSize
  }

  const slideTo = ({
    targetIndex,
    isNegative = false,
  }: {
    targetIndex: number
    isNegative?: boolean
  }) => {
    setSwitching(true)
    setCurrentIndex(targetIndex)
    setPreviousIndex(currentIndex)
    setSlideDirection(isNegative ? 'negative' : 'positive')

    animationTimerRef.current = setTimeout(() => {
      setSwitching(false)
      animationTimerRef.current = null
    }, animationDurationTime)
  }

  const getLocation = (index: number): string => {
    if (slideDirection && switching) {
      switch (index) {
        case previousIndex:
          return `${slideDirection} prev`
        case currentIndex:
          return `${slideDirection} next`
        default:
          return ''
      }
    } else if (!switching && index === currentIndex) {
      return 'current'
    } else {
      return ''
    }
  }

  useEffect(() => {
    return () => {
      animationTimerRef.current && clearInterval(animationTimerRef.current)
    }
  }, [])

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
        <section className={`${styles.banner_container}`}>
          <section className={`${styles.banner} flex mb-16`}>
            <div className={styles.banner_wrapper}>
              <div className={styles.banner_img_container}>
                {introduction.map((item, index) => (
                  <div
                    className={`${styles.banner_img_background} ${
                      styles[getLocation(index)]
                    } ${getLocation(index)}`}
                    style={{ animationDuration: `${animationDurationTime}ms` }}
                    key={`${index}`}
                    aria-hidden={index === currentIndex}
                  >
                    <img src={item.src} alt={`banner picture ${1}`} />
                  </div>
                ))}
              </div>
              <div
                className={`${styles.banner_button_group} flex justify-center gap-6`}
              >
                {introduction.map((item, index) => {
                  return (
                    <button
                      key={`button-${index}-${item.id}`}
                      open={index === currentIndex}
                      onClick={() =>
                        slideTo({
                          targetIndex: index,
                          isNegative: index < currentIndex,
                        })
                      }
                    />
                  )
                })}
              </div>
            </div>
            <div className={styles.banner_text_container}>
              <p className={styles.banner_text_header}>
                {introduction[currentIndex].header}
              </p>
              <p className={styles.banner_text_content}>
                {introduction[currentIndex].content}
              </p>
            </div>
          </section>
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
