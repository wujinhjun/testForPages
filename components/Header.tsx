import Link from 'next/link'
import style from '@/styles/Header.module.scss'
import type { Url } from 'next/dist/shared/lib/router/router'
import clsx from 'clsx'
import { CSSProperties, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { memo } from 'react'

interface IButton {
  text: string
  link: Url
  active: boolean
}

const NavbarButton = memo(({ text, link, active }: IButton) => {
  return (
    <div
      className={clsx({
        [style.button_wrapper]: true,
      })}
      open={active}
    >
      <Link className={style.text} href={link}>
        {text}
      </Link>
      <div className={style.bottom_line} />
    </div>
  )
})

export default function Header({ name }: { name: string }) {
  return (
    <div className={`${style.headerContainer}`}>
      <div
        className={clsx({
          [style.leftPanel]: true,
        })}
      >
        <div className={'text-white'}>LOGO</div>
        <NavbarButton text={'首页'} link={'/'} active={name == 'home'} />
        <NavbarButton text={'文艺'} link={'/poem'} active={name == 'poem'} />
        <NavbarButton text={'关于我'} link={'/me'} active={name == 'me'} />
        {/* <NavbarButton text={'首页'} link={'/'} />
        <NavbarButton text={'首页'} link={'/'} /> */}
      </div>
      <div className={style.rightPanel}>
        <div className={style.icon}>W</div>
      </div>
    </div>
  )
}
