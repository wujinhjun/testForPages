import { CSSProperties, ReactNode, useMemo, useState, useRef } from 'react'

import styles from '@/styles/SideMenu.module.scss'

type SubMenuTypes = {
  children:
    | ReactNode
    | Array<ReturnType<typeof MenuItem>>
    | ReturnType<typeof MenuItem>
  chapter: string
  href?: string
  onChangeOpen?: (open: boolean) => void
}

type MenuItemTypes = {
  children?: ReactNode
  href?: string
}

export function SideMenu({ children }: { children?: ReactNode }) {
  return <aside className={styles.side_menu_wrapper}>{children}</aside>
}

export function SubMenu({ children, chapter, href = '' }: SubMenuTypes) {
  const [open, setOpen] = useState(false)
  const childrenWrapperRef = useRef<HTMLUListElement | null>(null)
  const collapsedTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSubmenuClick = () => {
    const target = childrenWrapperRef.current

    if (!target) {
      return
    }

    if (open) {
      target.style.overflow = 'hidden'
      target.style.height = `${target.offsetHeight}px`
      target.offsetHeight
      target.style.height = '0px'

      collapsedTimer.current = setTimeout(() => {
        target.style.overflow = 'auto'
        target.style.display = 'none'
      }, 500)
    } else {
      target.style.display = 'block'
      target.style.overflow = 'hidden'
      target.style.height = 'auto'
      const height = target.offsetHeight
      target.style.height = '0px'
      target.offsetHeight
      target.style.height = `${height}px`

      collapsedTimer.current = setTimeout(() => {
        target.style.overflow = 'auto'
        target.style.height = 'auto'
      }, 200)
    }
  }

  return (
    <li className={`${styles.sub_side_menu_wrapper}`}>
      <a
        className={`${styles.sub_menu_chapter}`}
        open={open}
        onClick={() => {
          setOpen((prev) => !prev)
          handleSubmenuClick()
        }}
      >
        {chapter}
        <span className={styles.sub_menu_item_icon}></span>
      </a>
      <ul className={`${styles.sub_side_menu_items}`} ref={childrenWrapperRef}>
        {children}
      </ul>
    </li>
  )
}

export function MenuItem({ children, href = '' }: MenuItemTypes) {
  return (
    <li className={styles.side_menu_item_wrapper}>
      <a href={href}>{children}</a>
    </li>
  )
}
