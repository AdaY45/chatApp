import * as React from "react"

function LogoutIcon(props) {
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
        d="M13 12a1 1 0 11-2 0V2a1 1 0 112 0v10zm2.239-8.459a1 1 0 011.347-.43A9.973 9.973 0 0122 12.001c0 5.512-4.486 10-10 10S2 17.512 2 12a9.972 9.972 0 015.415-8.89 1 1 0 01.918 1.777A7.977 7.977 0 004 12c0 4.411 3.589 8 8 8 4.41 0 8-3.589 8-8a7.978 7.978 0 00-4.332-7.112.999.999 0 01-.43-1.347z"
        fill="#231F20"
      />
      <mask
        id="logout"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={21}
        height={22}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 12a1 1 0 11-2 0V2a1 1 0 112 0v10zm2.239-8.459a1 1 0 011.347-.43A9.973 9.973 0 0122 12.001c0 5.512-4.486 10-10 10S2 17.512 2 12a9.972 9.972 0 015.415-8.89 1 1 0 01.918 1.777A7.977 7.977 0 004 12c0 4.411 3.589 8 8 8 4.41 0 8-3.589 8-8a7.978 7.978 0 00-4.332-7.112.999.999 0 01-.43-1.347z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#logout)">
        <path fill="#707C97" d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

export default LogoutIcon
