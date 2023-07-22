import Image from 'next/image'
import clsx from 'clsx'
import styles from '@/styles/Banner.module.scss'
import useInterval from '@/hooks/useInterval'
import type { IButton, IDots, ITime, IBanner } from '@/utils/types'

import React, { useState, useEffect, useRef } from 'react'

export default function Banner({ contents }: IBanner) {
  const autoPlaySpeed = 5000
  const animationTime = 500
  // components
  //   my button
  const Button = ({ text }: IButton) => {
    return <div className={styles.button}>{text}</div>
  }
  //  my dots
  const Dots = ({ count, clickPage }: IDots) => {
    const dotsContent: React.ReactNode[] = []

    for (let i = 0; i < count; i++) {
      dotsContent.push(
        <div
          key={i}
          onClick={() => {
            clickPage(i)
          }}
          className={clsx({
            [styles.dot]: true,
            [styles.active]: i === currentIndex,
          })}
        ></div>
      )
    }

    return <div className={styles.dots}>{dotsContent}</div>
  }

  //   my timeline
  const Timeline = ({ progress }: ITime) => {
    return (
      <div className={styles.timeline}>
        <div
          style={{
            animationDuration: `${autoPlaySpeed}ms`,
            transitionDuration: `${autoPlaySpeed}ms`,
            width: `100%`,
          }}
          className={styles.timelineActive}
        ></div>
      </div>
    )
  }

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [previousIndex, setPreviousIndex] = useState<number>(currentIndex)
  const [switching, setSwitching] = useState<boolean>(false)
  const animationTimer = useRef<NodeJS.Timeout | null>(null)
  const [isPause, setIsPause] = useState<boolean>(false)
  const [direction, setDirection] = useState<'position' | 'negative' | null>(
    null
  )

  const contentsLength = contents.length

  const resetInterval = useInterval(() => {
    slideTo({ targetIndex: getValidIndex(currentIndex + 1) })
  }, autoPlaySpeed)

  useEffect(() => {
    return () => {
      if (animationTimer.current) {
        clearTimeout(animationTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    slideTo({ targetIndex: currentIndex })
  })

  function slideTo({
    targetIndex,
    isNegative = false,
    resetPlayInterval = false,
  }: {
    targetIndex: number
    isNegative?: boolean
    resetPlayInterval?: boolean
  }) {
    if (!switching && targetIndex !== currentIndex) {
      setSwitching(true)
      setCurrentIndex(targetIndex)
      setPreviousIndex(currentIndex)
      setDirection(isNegative ? 'negative' : 'position')
      if (resetPlayInterval) {
        resetInterval()
      }

      animationTimer.current = setTimeout(() => {
        setSwitching(false)
        animationTimer.current = null
      }, animationTime)
    }
  }

  function getValidIndex(index: number): number {
    return (index + contentsLength) % contentsLength
  }

  return (
    <section className={styles.wrapper}>
      {/* the background image as the window */}
      <section className={styles.image}>
        <Image
          className={styles.screen}
          src='https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202303111133810.png'
          alt='screen'
          placeholder='blur'
          blurDataURL={'/assets/dev1.png'}
          width={755}
          height={510}
          priority
        />
      </section>

      {/* carousel */}
      <section
        className={styles.carousel}
        onMouseEnter={() => setIsPause(true)}
        onMouseLeave={() => setIsPause(false)}
      >
        <div
          className={clsx({
            [styles.pictures]: true,
            [styles.negative]: direction === 'negative',
          })}
        >
          {contents.map((item, index) => {
            const isCur = index === currentIndex
            return (
              <section
                key={index}
                className={clsx({
                  [styles.picture]: true,
                  [styles.pictureCurrent]: isCur,
                  [styles.pictureSlideOut]:
                    index === previousIndex && direction && switching,
                  [styles.pictureSlideIn]: isCur && direction && switching,
                })}
                style={{
                  animationDuration: `${animationTime}ms`,
                  transitionDuration: `${animationTime}ms`,
                }}
              >
                <Image src={item.src} width={572} height={318} alt='content' />
              </section>
            )
          })}
        </div>
        <Dots
          count={3}
          clickPage={(index) => {
            slideTo({
              targetIndex: index,
              isNegative: index < currentIndex,
              resetPlayInterval: true,
            })
          }}
        ></Dots>
      </section>

      {/* the right panel for introduction */}
      <div className={clsx({ [styles.intro]: true })}>
        <div style={{ whiteSpace: 'pre-line' }} className={styles.header}>
          {contents[currentIndex].header}
        </div>
        <Timeline progress={100}></Timeline>
        <div className={styles.content}>{contents[currentIndex].content}</div>
        {/* <Button text={contents[currentIndex].buttonText}></Button> */}
      </div>
    </section>
  )
}
