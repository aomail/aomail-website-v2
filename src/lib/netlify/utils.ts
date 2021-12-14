import { __DEV__ } from '@utils/src'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encode = (obj: { [key: string]: any }): string =>
  Object.entries(obj)
    .map(
      ([key, val]) =>
        `${
          typeof val === 'string'
            ? `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
            : val !== null && typeof val === 'object'
            ? `${encode(val)}`
            : ''
        }`,
      ''
    )
    .join('&')

export const serverUrl =
  __DEV__ && !process.env.NETLIFY
    ? 'http://localhost:3000'
    : 'https://www.aomail.com.au'
