import styles from "./PoemDisplay.module.scss";
import type { IDisplay, IPoemCard, IItemRange } from "@/utils/types";
import List from "rc-virtual-list";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const PoemCard = ({ title, content, id }: IPoemCard) => {
  return (
    <section className={styles.poemContainer} id={id}>
      <div className={styles.poemTitleWrapper}>
        <div className={styles.poemTitle}>{title}</div>
      </div>
      <div className={styles.poemContentWrapper}>
        <div
          className={styles.poemContent}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </section>
  );
};

const Item = ({
  title,
  id,
  activeID,
  moveToTarget,
}: {
  title: string;
  id: string;
  activeID: string;
  moveToTarget: (id: string) => void;
}) => {
  return (
    <section
      className={clsx({
        [styles.catalogItem]: true,
        [styles.active]: activeID === id,
      })}
      id={id}
      onClick={() => moveToTarget(id)}
    >
      <span className={styles.text}>{title}</span>
    </section>
  );
};

const PoemDisplay = ({ catalogs, contents }: IDisplay) => {
  const contentElements = useRef<Array<IItemRange>>([]);
  const ticking = useRef<boolean>(false);
  const [activeID, setActiveID] = useState<string>(catalogs[0].id);

  const changeActiveID = (target: string) => {
    setActiveID(target);
  };

  const moveToTarget = (targetID: string) => {
    const elementTemp: HTMLElement = document.getElementById(`${targetID}`)!;
    changeActiveID(targetID);
    const { offsetTop } = elementTemp;
    window.scrollTo({ top: offsetTop - 120 });
    // elementTemp.scrollIntoView(true);
  };

  useEffect(() => {
    contentElements.current = [];
    catalogs.forEach((item, index) => {
      const id = item.id;
      const eleTemp: HTMLElement = document.getElementById(`${id}`)!;
      let itemTopRange: IItemRange = {
        id,
        start: 0,
        end: 0,
      };

      if (index === catalogs.length - 1) {
        itemTopRange = {
          id,
          start: eleTemp.offsetTop,
          end: document.body.offsetHeight,
        };
      } else {
        const nextItem: { title: string; id: string } = catalogs[index + 1];
        const nextEleTemp: HTMLElement = document.getElementById(
          `${nextItem.id}`
        )!;

        itemTopRange = {
          id,
          start: eleTemp.offsetTop,
          end: nextEleTemp.offsetTop,
        };
      }

      contentElements.current.push(itemTopRange);
    });
  }, [catalogs]);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.onscroll = (e: any) => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const top: number = e.target.documentElement.scrollTop || 0;
          const target: IItemRange | undefined = contentElements.current.find(
            (item) => item.start <= top + 160 && item.end > top + 160
          );

          if (target) {
            changeActiveID(target.id);
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };
  });

  return (
    <section className={styles.poemWrapper}>
      <section className={styles.poems}>
        {contents.map((poem) => {
          return (
            <PoemCard
              key={poem.id}
              id={poem.id}
              title={poem.title}
              content={poem.content}
            />
          );
        })}
      </section>
      <section className={styles.catalog}>
        <List
          data={catalogs}
          itemKey="id"
          itemHeight={40}
          height={480}
          style={{ width: "100%" }}
        >
          {(item) => (
            <Item
              title={item.title}
              id={item.id}
              activeID={activeID}
              moveToTarget={moveToTarget}
            />
          )}
        </List>
      </section>
    </section>
  );
};

export default PoemDisplay;
