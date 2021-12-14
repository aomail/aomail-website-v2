import { createIcon } from './createIcon'
export const Check = createIcon({
  displayName: 'Check',
  viewBox: '0 0 24 24',
  path: (
    <path
      d="M22 5.5L8.7 20 2 13.6 3.6 12l5 4.8L20.3 4 22 5.5z"
      fill="currentColor"
    />
  ),
})

export const SuccessCheck = createIcon({
  displayName: 'SuccessCheck',
  viewBox: '0 0 60 60',
  path: (
    <>
      <g filter="url(#filter0_dd)">
        <path fill="#558C46" d="M10 28a20 20 0 1140 0 20 20 0 01-40 0z" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M40 21.5L26.7 36 20 29.6l1.6-1.6 5 4.8L38.3 20l1.7 1.5z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          width="60"
          height="60"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius="2"
            result="effect1_dropShadow"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.168627 0 0 0 0.06 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius="2"
            result="effect2_dropShadow"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.138889 0 0 0 0 0.490196 0 0 0 0.02 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
      </defs>
    </>
  ),
})
export const ErrorCheck = createIcon({
  displayName: 'SuccessCheck',
  viewBox: '0 0 60 60',
  path: (
    <>
      <g filter="url(#filter0_dd)">
        <path
          d="M10 28C10 16.9543 18.9543 8 30 8C41.0457 8 50 16.9543 50 28C50 39.0457 41.0457 48 30 48C18.9543 48 10 39.0457 10 28Z"
          fill="#DE1334"
        />
        <path d="M31 33L32 17H28L29 33H31Z" fill="white" />
        <path
          d="M30 39C31.1046 39 32 38.1046 32 37C32 35.8954 31.1046 35 30 35C28.8954 35 28 35.8954 28 37C28 38.1046 28.8954 39 30 39Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          x="0"
          y="0"
          width="60"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.168627 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.138889 0 0 0 0 0.490196 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </>
  ),
})
