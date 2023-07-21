import type { Url } from 'next/dist/shared/lib/router/router'

export interface IPoemHtml {
  id: string
  content: string
  title: string
  date: number
}

export interface IPoem {
  allPostsData: IPoemHtml[]
}

export interface ICatalogs {
  id: string
  title: string
}

export interface IDisplay {
  catalogs: ICatalogs[]
  contents: IPoemHtml[]
}

export interface IPoemCard {
  title: string
  content: string
  id: string
}

export interface IButton {
  text: string
}

export interface IDots {
  count: number
  clickPage: (index: number) => void
}

export interface IBannerContent {
  src: string
  buttonText: string
  header: string
  content: string
}

export interface ITime {
  progress: number
}

export interface IItemRange {
  id: string
  start: number
  end: number
}

export interface IBanner {
  contents: IBannerContent[]
}

export interface ICard {
  pic: string
  src: Url
  header: string
  description: string
  tech: string
  projectSrc: string
}

export interface IHome {
  introduction: IBannerContent[]
  project: ICard[]
}

export interface IHomeContent {
  production: ICard[]
}
