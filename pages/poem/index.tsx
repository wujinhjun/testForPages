import { useEffect, useMemo, useRef, useState, useLayoutEffect } from 'react'
import { useThrottleFn } from 'ahooks'
import { NextSeo } from 'next-seo'
import { InfiniteLoader, List } from 'react-virtualized'

import Header from '@/components/Header'
import { SideMenu, MenuItem, SubMenu } from '@/components/SideMenu'
import { LoaderRipple } from '@/components/Loader'

import group from '@/utils/group'
import { getAllPostDataContent, getPostsIDs } from '@/lib/poemLib'

import styles from '@/styles/Home.module.scss'

import type { IPoem, IPoemHtml, IPoemCard } from '@/utils/types'

const OFFSET_TOP = 96

const PoemCard = ({ title, content, id }: IPoemCard) => {
  return (
    <section className={styles.poemContainer} id={id}>
      <div className={styles.poemTitleWrapper}>
        <div className={styles.poemTitle}>{title}</div>
      </div>
      <div className={styles.poemContentWrapper}>
        <div
          className={styles.poemContent}
          dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </section>
  )
}

const remoteRowCount = 300
const list = []

function isRowLoaded({ index }) {
  return !!list[index]
}

function loadMoreRows({ startIndex, stopIndex }) {
  return fetch(
    `path/to/api?startIndex=${startIndex}&stopIndex=${stopIndex}`
  ).then((response) => {
    // Store response data in list...
  })
}

function rowRenderer({ key, index, style }) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  )
}

export default function Poem({ allPostsData }: IPoem) {
  //   const scrollTop = useScrollTop()
  const [scrollTop, setScrollTop] = useState(0)
  const groupedPoem = group<IPoemHtml>(allPostsData, 'year')

  const [poemData, setPoemData] = useState<IPoemHtml[]>([])
  const [poemPage, setPoemPage] = useState(0)

  const anchorData: Record<
    string,
    Array<{ year: number; title: string; id: string }>
  > = useMemo(() => {
    const result: Record<
      string,
      Array<{ year: number; title: string; id: string }>
    > = {}

    Object.keys(groupedPoem).forEach((key) => {
      result[String(key)] = groupedPoem[key].map((item) => {
        return {
          year: item.year,
          id: item.id,
          title: item.title,
        }
      })
    })

    return result
  }, [groupedPoem])

  const [activeAnchor, setActiveAnchor] = useState(
    Object.values(anchorData)[0][0].id
  )

  const scrollAnchorRef = useRef<HTMLLIElement | null>(null)

  const { run: handleScroll } = useThrottleFn(
    () => {
      // 计算Header
      setScrollTop(window.scrollY)

      // 计算锚点
      const domArray: Array<{ id: string; top: number }> = []

      if (
        document.documentElement.clientHeight + window.scrollY ===
        document.body.scrollHeight
      ) {
        const dataFlat = Object.values(anchorData)

        const lastId =
          dataFlat[dataFlat.length - 1][
            dataFlat[dataFlat.length - 1].length - 1
          ].id

        setActiveAnchor(lastId)
      } else {
        Object.keys(anchorData).forEach((key) => {
          anchorData[key].forEach((item) => {
            const dom = document.getElementById(item.id)
            if (dom && dom.getBoundingClientRect().top > 0) {
              domArray.push({
                id: item.id,
                top: Math.abs(dom.getBoundingClientRect().top - OFFSET_TOP),
              })
            }
          })
        })

        if (domArray.length) {
          domArray.sort((a, b) => a.top - b.top)
          const { id } = domArray[0]
          setActiveAnchor(id)
        }
      }
    },
    { wait: 150 }
  )

  // 处理锚点点击事件
  const handleAnchorClick = (event: any) => {
    event.preventDefault()
    const targetId = event.target.getAttribute('href')

    if (targetId) {
      const targetElement = document.getElementById(targetId.slice(1))
      targetElement && targetElement.scrollIntoView()
      setActiveAnchor(targetId.slice(1))
    }
  }

  useLayoutEffect(() => {
    // 获取滚动锚点元素
    const scrollAnchorElement = scrollAnchorRef.current

    // 为锚点元素添加点击事件监听器
    scrollAnchorElement &&
      scrollAnchorElement.addEventListener('click', handleAnchorClick)

    window && window.addEventListener('scroll', handleScroll)

    // 在组件卸载时移除事件监听器
    return () => {
      scrollAnchorElement &&
        scrollAnchorElement.removeEventListener('click', handleAnchorClick)
      window && window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <NextSeo title='诗意' />
      <section className={`header-fixed ${scrollTop ? 'sticky' : ''}`}>
        <Header name='poem' />
      </section>
      <main className={styles.main}>
        <section className='flex justify-between'>
          <div id='poem-display-area'>
            <section className={styles.poems}>
              {allPostsData.map((poem, index) => {
                return (
                  <PoemCard
                    key={`poem-card-${poem.id}`}
                    id={poem.id}
                    title={poem.title}
                    content={poem.content}
                  />
                )
              })}
            </section>
            <InfiniteLoader
              isRowLoaded={isRowLoaded}
              loadMoreRows={loadMoreRows}
              rowCount={allPostsData.length}>
              {({ onRowsRendered, registerChild }) => (
                <List
                  height={300}
                  onRowsRendered={onRowsRendered}
                  ref={registerChild}
                  rowCount={remoteRowCount}
                  rowHeight={20}
                  rowRenderer={rowRenderer}
                  width={300}
                />
              )}
            </InfiniteLoader>
            ,
          </div>
          <div className={styles.side_bar}>
            <SideMenu forwardRef={scrollAnchorRef}>
              {Object.keys(anchorData).map((key) => {
                return (
                  <SubMenu
                    chapter={key}
                    key={`poem-submenu-${key}`}
                    active={activeAnchor.slice(0, 4) == key}>
                    {anchorData[key].map((poemItem) => {
                      return (
                        <MenuItem
                          key={`${key}-poem-${poemItem.id}`}
                          href={`#${poemItem.id}`}
                          className={`${
                            activeAnchor === poemItem.id ? 'active' : ''
                          }`}>
                          {poemItem.title}
                        </MenuItem>
                      )
                    })}
                  </SubMenu>
                )
              })}
            </SideMenu>
          </div>
        </section>
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
