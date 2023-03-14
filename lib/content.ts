import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { IBannerContent } from "@/utils/types";

const contentPath = path.join(process.cwd(), "content");

export const getHomeContentData = async (filename: string) => {
  const data = fs.readFileSync(
    path.join(contentPath, `${filename}.json`),
    "utf-8"
  );

  const result = JSON.parse(data).data as IBannerContent[];

  return result;
};
