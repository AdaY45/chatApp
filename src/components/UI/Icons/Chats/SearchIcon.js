import * as React from "react"

function SearchIcon(props) {
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
        d="M5 11c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm15.707 8.293l-3.395-3.396A7.952 7.952 0 0019 11c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a7.952 7.952 0 004.897-1.688l3.396 3.395a.997.997 0 001.414 0 .999.999 0 000-1.414z"
        fill="#231F20"
      />
      <mask
        id="search"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={3}
        width={19}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 11c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm15.707 8.293l-3.395-3.396A7.952 7.952 0 0019 11c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a7.952 7.952 0 004.897-1.688l3.396 3.395a.997.997 0 001.414 0 .999.999 0 000-1.414z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#search)">
        <path fill="#707C97" d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

export default SearchIcon
