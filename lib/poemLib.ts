import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import type { IPoemHtml } from '@/utils/types'

const postsDir = path.join(process.cwd(), 'poem')

export function getAllPostsData() {
  const filenames = fs.readdirSync(postsDir)

  const allPostsData: { id: string; date?: number }[] = filenames.map(
    (filename) => {
      const id = filename.replace(/\.md$/, '')
      const fullPath = path.join(postsDir, filename)
      const fileContent = fs.readFileSync(fullPath, 'utf-8')
      const prefix = matter(fileContent).data

      return {
        id,
        ...prefix,
      }
    }
  )

  return allPostsData.sort((a, b) => a.date! - b.date!)
}

export async function getPostData(id: string): Promise<IPoemHtml> {
  const fullPath = path.join(postsDir, `${id}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf-8')

  const result = matter(fileContent)
  // await is lazy loading, so we must use a middle variable to transform
  const processContent = await remark().use(remarkHtml).process(result.content)
  const contentHtml = processContent.toString()
  const content = contentHtml.replace(/<h3>(\S*)<\/h3>/, '').trim()

  return {
    id,
    content,
    title: result.data.title,
    date: result.data.date,
    year: result.data.date,
  }
}

export async function getAllPostDataContent(): Promise<IPoemHtml[]> {
  const allPostsID = getAllPostsData()
  const allPostsData: IPoemHtml[] = []

  for (const item of allPostsID) {
    const { id } = item
    const result = await getPostData(id)
    allPostsData.push(result)
  }

  const data = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return -1
    } else if (a.date > b.date) {
      return 1
    } else {
      return (
        Number.parseInt(a.id.substring(5)) - Number.parseInt(b.id.substring(5))
      )
    }
  })

  return data
}

export function getPostsIDs() {
  const filenames = fs.readdirSync(postsDir)
  return filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ''),
      },
    }
  })
}
