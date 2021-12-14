import { createIcon } from './createIcon'

export const VideoMeet = createIcon({
  displayName: 'Close',
  path: (
    <path
      fillRule="evenodd"
      d="M17.7 3.2h1c1.3 0 2.3 1 2.3 2.2v15.4c0 1.2-1 2.2-2.2 2.2H3.2C2 23 1 22 1 20.8V5.4c0-1.2 1-2.2 2.2-2.2h1.1V1h2.3v2.2h8.8V1h2.3v2.2zM15 10.4v2.3l2.7-2.6v7L15 14.7V17c0 .3-.4.6-.7.6H6c-.3 0-.7-.3-.7-.6v-6.5c0-.3.4-.6.7-.6h8.2c.3 0 .7.3.7.6z"
      clipRule="evenodd"
      fill="currentColor"
    />
  ),
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Book a meeting',
  },
})
