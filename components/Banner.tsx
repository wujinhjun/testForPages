import styles from "./Banner.module.scss";
import Image from "next/image";
import clsx from "clsx";
import useInterval from "@/utils/useInterval";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface IButton {
  text: string;
}

interface IDots {
  count: number;
  clickPage: (index: number) => void;
}

interface IBannerContent {
  src: string;
  buttonText: string;
  header: string;
  content: string;
}

const contents: IBannerContent[] = [
  {
    src: "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202303062103036.png",
    buttonText: "我的社交账号",
    header: "你好,\n在下魏堃",
    content: "有人说（沃兹基硕德）：不喜欢设计的诗人不是一个好前端",
  },
  {
    src: "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202303062105738.png",
    buttonText: "我的社交账号",
    header: "在程序的世界里，\n我是前端",
    content:
      "我的技术栈是typescript+react+node.js\n写过网站，写过基于node的命令行工具，在曾经做过creative coding，也开发过组件库。",
  },
  {
    src: "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052104388.png",
    buttonText: "我的社交账号",
    header: "在文字的海洋里，\n我是诗人",
    content:
      "在很多年前，我模仿着歌词开始了写现代诗\n在大学里，学了基础的格律，开始了古典诗词的创作",
  },
];

export default function Banner() {
  const Button = ({ text }: IButton) => {
    return <div className={styles.button}>{text}</div>;
  };

  const Dots = ({ count, clickPage }: IDots) => {
    const dotsContent: React.ReactNode[] = [];

    for (let i = 0; i < count; i++) {
      dotsContent.push(
        <div
          key={i}
          onClick={() => {
            clickPage(i);
          }}
          className={clsx({
            [styles.dot]: true,
            [styles.active]: i === currentIndex,
          })}
        ></div>
      );
    }

    return <div className={styles.dots}>{dotsContent}</div>;
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [previousIndex, setPreviousIndex] = useState<number>(currentIndex);
  const [switching, setSwitching] = useState<boolean>(false);
  const animationTimer = useRef<NodeJS.Timeout | null>(null);
  const [isPause, setIsPause] = useState<boolean>(false);
  const [direction, setDirection] = useState<"position" | "negative" | null>(
    null
  );

  const contentsLength = contents.length;

  const autoPlaySpeed = 5000;
  const animationTime = 500;

  const prevIndex = getValidIndex(currentIndex - 1);
  const nextIndex = getValidIndex(currentIndex + 1);

  const resetInterval = useInterval(() => {
    slideTo({ targetIndex: getValidIndex(currentIndex + 1) });
  }, autoPlaySpeed);

  useEffect(() => {
    return () => {
      if (animationTimer.current) {
        clearTimeout(animationTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    slideTo({ targetIndex: currentIndex });
  });

  function slideTo({
    targetIndex,
    isNegative = false,
    resetPlayInterval = false,
  }: {
    targetIndex: number;
    isNegative?: boolean;
    resetPlayInterval?: boolean;
  }) {
    console.log(`curr: ${currentIndex}`);
    console.log(`switch: ${switching}`);

    if (!switching && targetIndex !== currentIndex) {
      setSwitching(true);
      setCurrentIndex(targetIndex);
      setPreviousIndex(currentIndex);
      setDirection(isNegative ? "negative" : "position");
      if (resetPlayInterval) {
        resetInterval();
      }

      animationTimer.current = setTimeout(() => {
        setSwitching(false);
        animationTimer.current = null;
      }, animationTime);
    }
  }

  function getValidIndex(index: number): number {
    return (index + contentsLength) % contentsLength;
  }

  return (
    <section className={styles.wrapper}>
      {/* the background image as the window */}
      <section className={styles.image}>
        <Image
          className={styles.screen}
          src="/assets/screen.png"
          alt="screen"
          width={755}
          height={510}
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
            [styles.negative]: direction === "negative",
          })}
        >
          {contents.map((item, index) => {
            const isPrev = index === prevIndex;
            const isNext = index === nextIndex;
            const isCur = index === currentIndex;
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
                <Image src={item.src} width={572} height={318} alt="content" />
              </section>
            );
          })}
        </div>
        <Dots
          count={3}
          clickPage={(index) => {
            slideTo({
              targetIndex: index,
              isNegative: index < currentIndex,
              resetPlayInterval: true,
            });
          }}
        ></Dots>
      </section>

      {/* the right panel for introduction */}

      <div className={clsx({ [styles.intro]: true })}>
        <div style={{ whiteSpace: "pre-line" }} className={styles.header}>
          {contents[currentIndex].header}
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineActive}></div>
        </div>
        <div className={styles.content}>{contents[currentIndex].content}</div>
        <Button text={contents[currentIndex].buttonText}></Button>
      </div>
    </section>
  );
}
