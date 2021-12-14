/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type * as DatoCms from 'react-datocms'
import { SeoMetaTagType } from 'react-datocms'
import type { BlockRecord } from './blockRules'

export function isMetaTag(tag: any): tag is DatoCms.SeoMetaTagType {
  if (tag?.tag) return true
  console.warn('meta tag was invalid:\n' + JSON.stringify(tag))
}

export function parseMetaTags(tags: any[]): SeoMetaTagType[] {
  return tags.reduce((acc, t) => (isMetaTag(t) ? acc.concat(t) : acc), [])
}

export function isBlockRecord(obj: any): obj is BlockRecord {
  return obj?.__typename
}

export function parseModularBlocks(data: any[]) {
  return data.reduce((acc, record) => {
    if (isBlockRecord(record)) {
      return acc.concat(record)
    }
    console.warn('Modular block was not valid: \n' + JSON.stringify(record))
    return acc
  }, [])
}
