import { createIcon } from './createIcon'

export const Download = createIcon({
  displayName: 'Download',
  path: (
    <>
      <path
        d="M11.118 12.458V4h1.764v8.458l3.53-3.53 1.248 1.248-5.66 5.66-5.66-5.66L7.588 8.93l3.53 3.529z"
        fill="currentColor"
      />
      <path
        d="M5.824 13.706v4.412h12.352v-4.412h1.765v6.176H4.06v-6.176h1.765z"
        fill="currentColor"
      />
    </>
  ),
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Download',
  },
})
