import * as React from "react"

function SendIcon(props) {
  return (
    <svg
      width={21}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_dd_1:392)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.39 18.333a.832.832 0 01-.817-.668L10.29 11.36a.833.833 0 00-.651-.65L3.334 9.426a.832.832 0 01-.097-1.606L16.57 3.377a.834.834 0 011.054 1.053L13.18 17.763a.832.832 0 01-.79.57z"
          fill="#231F20"
        />
        <mask
          id="send"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={2}
          y={3}
          width={16}
          height={16}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.39 18.333a.832.832 0 01-.817-.668L10.29 11.36a.833.833 0 00-.651-.65L3.334 9.426a.832.832 0 01-.097-1.606L16.57 3.377a.834.834 0 011.054 1.053L13.18 17.763a.832.832 0 01-.79.57z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#send)">
          <path fill="#fff" d="M1 0h20v20H1z" />
        </g>
      </g>
      <defs>
        <filter
          id="prefix__filter0_dd_1:392"
          x={-1}
          y={-1}
          width={24}
          height={24}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1:392" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
          <feBlend
            in2="effect1_dropShadow_1:392"
            result="effect2_dropShadow_1:392"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1:392"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SendIcon
