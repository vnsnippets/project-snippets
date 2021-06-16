import dayjs from "dayjs"
import { Metadata } from "./models/Article"

export const BackgroundURL = (url: string) => `url(${url})`
export const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

export const SLUG = (meta: Metadata, separator: string = '/') => {
  const date = dayjs.unix(meta.timestamp).format(`YYYY${separator}MM`);
  const title = meta.title.toLowerCase().replace('\'', '').replace(/\s/g, '-');
  
  return `${date}${separator}${title}`
}