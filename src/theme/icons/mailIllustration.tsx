import { createIcon } from './createIcon'

export const MailIllustration = createIcon({
  displayName: 'MailGraphic',

  viewBox: '0 0 280 218',
  defaultProps: {
    size: 'custom',
    title: 'Direct Mail Graphic',
    description:
      'Conceptual geometic artwork to convey the Direct Mail process',
    role: 'img',
  },
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M187 94v62l-31-31V63l31 31z"
        fill="#FE9339"
      />
      <path d="M187 125l-31-31" stroke="#FA253A" strokeDasharray="5 2" />
      <path d="M124 218H0v-62l124 62z" fill="#B6DDF6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62 156H0l62 31 62-31H62z"
        fill="#00237D"
      />
      <path
        d="M124 156v62l-62-31 62-31z"
        fill="url(#mailIllustrationGradient)"
      />
      <path d="M218 156h31v31l-31-31zM218 125h31v31l-31-31z" fill="#00237D" />
      <path
        d="M156 218h31c17 0 31-14 31-31h-31c-18 0-31 14-31 31z"
        fill="#558C46"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M187 94v62l31-31V63l-31 31zM62 32v62l31 31V94L62 63l31 31V63L62 32z"
        fill="#B6DDF6"
      />
      <path d="M156 125a62 62 0 00-63-62v62h63z" fill="#242334" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M280 94h-62a31 31 0 0162 0z"
        fill="#FA253A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M218 94a31 31 0 0062 0h-62z"
        fill="#0072CE"
      />
      <path d="M156 0a62 62 0 00-63 63h63V0z" fill="#558C46" />
      <path d="M156 125l-32 31" stroke="#558C46" strokeDasharray="5 2" />
      <path d="M93 125l31-31" stroke="#fff" strokeDasharray="5 2" />
      <path d="M218 125l31-31" stroke="#00237D" strokeDasharray="5 2" />
      <ellipse cx="140" cy="47" rx="15.6" ry="15.5" fill="#FE9339" />
      <path d="M156 63l-32-31" stroke="#fff" strokeDasharray="5 2" />
      <defs>
        <linearGradient
          id="mailIllustrationGradient"
          x1="66.3"
          y1="46.1"
          x2="125.4"
          y2="57.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00217D" />
          <stop offset="100%" stopColor="#0072CE" />
        </linearGradient>
      </defs>
    </>
  ),
})
