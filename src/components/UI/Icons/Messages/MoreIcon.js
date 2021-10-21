import * as React from "react"

function MoreIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7a2 2 0 10-.001-4.001A2 2 0 0012 7zm0 3a2 2 0 10.001 4.001A2 2 0 0012 10zm-2 9a2 2 0 114.001.001A2 2 0 0110 19z"
        fill="#231F20"
      />
      <mask
        id="more"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={10}
        y={3}
        width={4}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7a2 2 0 10-.001-4.001A2 2 0 0012 7zm0 3a2 2 0 10.001 4.001A2 2 0 0012 10zm-2 9a2 2 0 114.001.001A2 2 0 0110 19z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#more)">
        <path fill="#707C97" d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

export default MoreIcon
