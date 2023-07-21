import Head from 'next/head'
import Header from './Header'
import styles from '@/styles/Layout.module.scss'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  poem?: boolean
}

export default function Layout({ children, poem }: Props) {
  return (
    <>
      {children}
      <div
        className={clsx({
          [styles.back_triangle]: !poem,
          [styles.back_triangle_2]: poem,
        })}
      ></div>
    </>
  )
}
