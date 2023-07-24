import { getAllPostDataContent, getPostsIDs } from '@/lib/poemLib'
import PoemDisplay from '@/components/PoemDisplay'
import styles from '@/styles/Home.module.scss'
import { NextSeo } from 'next-seo'

import type { IPoem, ICatalogs, IPoemHtml, IPoemCard } from '@/utils/types'
import Header from '@/components/Header'
import useScrollTop from '@/hooks/useScrollTop'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { useMemo } from 'react'
import group from '@/utils/group'
import {
  SideMenu,
  MenuItem as MyMenuItem,
  SubMenu as MySubMenu,
} from '@/components/SideMenu'

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
  )
}

export default function Poem({ allPostsData }: IPoem) {
  //   console.log(allPostsData);
  const scrollTop = useScrollTop()
  const groupedPoem = group<IPoemHtml>(allPostsData, 'year')
  console.log(groupedPoem)

  const catalogs: ICatalogs[] = useMemo(
    () =>
      allPostsData.map((item) => {
        return { id: item.id, title: item.title as string }
      }),
    [allPostsData]
  )

  return (
    <>
      <NextSeo title='诗意' />
      <section className={`header-fixed ${scrollTop ? 'sticky' : ''}`}>
        <Header name='poem' />
      </section>
      <main className={styles.main}>
        <section className='flex justify-between'>
          <section className={styles.poems}>
            {allPostsData.map((poem) => {
              return (
                <PoemCard
                  key={poem.id}
                  id={poem.id}
                  title={poem.title}
                  content={poem.content}
                />
              )
            })}
          </section>

          <div className={styles.side_bar}>
            <SideMenu>
              {Object.keys(groupedPoem).map((key) => {
                return (
                  <MySubMenu chapter={key} key={`poem-submenu-${key}`}>
                    {groupedPoem[key].map((poemItem) => {
                      return (
                        <MyMenuItem
                          key={`${key}-poem-${poemItem.id}`}
                          href={`#${poemItem.id}`}
                        >
                          {poemItem.title}
                        </MyMenuItem>
                      )
                    })}
                  </MySubMenu>
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
