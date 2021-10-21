import * as React from "react"

function PlusIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_dd_1:406)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 11h-6V5a1 1 0 10-2 0v6H5a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2z"
          fill="#231F20"
        />
        <mask
          id="plus"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={4}
          y={4}
          width={16}
          height={16}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 11h-6V5a1 1 0 10-2 0v6H5a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#prefix__filter1_dd_1:406)" mask="url(#plus)">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </g>
      </g>
      <defs>
        <filter
          id="prefix__filter0_dd_1:406"
          x={-2}
          y={-1}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1:406" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
          <feBlend
            in2="effect1_dropShadow_1:406"
            result="effect2_dropShadow_1:406"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1:406"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter1_dd_1:406"
          x={-2}
          y={-1}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1:406" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
          <feBlend
            in2="effect1_dropShadow_1:406"
            result="effect2_dropShadow_1:406"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1:406"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default PlusIcon
