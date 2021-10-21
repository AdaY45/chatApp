import * as React from "react"

function FileIcon(props) {
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
        d="M17.444 20H6.555C6.25 20 6 19.776 6 19.5v-15c0-.276.25-.5.555-.5H11v4.15C11 9.722 12.217 11 13.714 11H18v8.5c0 .276-.25.5-.556.5zm.205-11h-3.935C13.32 9 13 8.619 13 8.15V4h.112l4.537 5zm2.091-.672l-5.444-6a.998.998 0 00-.74-.328h-7C5.145 2 4 3.122 4 4.5v15C4 20.878 5.146 22 6.555 22h10.89C18.852 22 20 20.878 20 19.5V9a1 1 0 00-.26-.672z"
        fill="#fff"
      />
      <mask
        id="file"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={2}
        width={17}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.444 20H6.555C6.25 20 6 19.776 6 19.5v-15c0-.276.25-.5.555-.5H11v4.15C11 9.722 12.217 11 13.714 11H18v8.5c0 .276-.25.5-.556.5zm.205-11h-3.935C13.32 9 13 8.619 13 8.15V4h.112l4.537 5zm2.091-.672l-5.444-6a.998.998 0 00-.74-.328h-7C5.145 2 4 3.122 4 4.5v15C4 20.878 5.146 22 6.555 22h10.89C18.852 22 20 20.878 20 19.5V9a1 1 0 00-.26-.672z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#file)">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

export default FileIcon
