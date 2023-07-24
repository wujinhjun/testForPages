import { getAllPostDataContent, getPostsIDs } from '@/lib/poemLib'
import PoemDisplay from '@/components/PoemDisplay'
import styles from '@/styles/Home.module.scss'
import { NextSeo } from 'next-seo'

import type { IPoem, ICatalogs } from '@/utils/types'
import Header from '@/components/Header'
import useScrollTop from '@/hooks/useScrollTop'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { useMemo } from 'react'

export default function Poem({ allPostsData }: IPoem) {
  //   console.log(allPostsData);
  const scrollTop = useScrollTop()

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
        <section className={'flex justify-between flex-row-reverse'}>
          <Sidebar>
            <Menu>
              <SubMenu label={2021}>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
              </SubMenu>
              <SubMenu label={2022}>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
              </SubMenu>
              <SubMenu label={2023}>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </section>

        {/* ;<PoemDisplay catalogs={catalogs} contents={allPostsData}></PoemDisplay> */}
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
