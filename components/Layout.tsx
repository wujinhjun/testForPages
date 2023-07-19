import Head from 'next/head'
import Header from './Header'
import styles from './Layout.module.scss'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  poem?: boolean
}

export default function Layout({ children, poem }: Props) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='The webpage for wujinhjun to display'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <>
        {children}
        <div
          className={clsx({
            [styles.back_triangle]: !poem,
            [styles.back_triangle_2]: poem,
          })}
        ></div>
      </>
    </>
  )
}
