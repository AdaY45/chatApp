import * as React from "react"

function NotCheckedIcon(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.576 12a.667.667 0 01-.486-.21L2.848 8.337a.666.666 0 11.97-.912l2.75 2.927 5.606-6.135a.667.667 0 01.985.899l-6.091 6.667A.665.665 0 016.58 12h-.004z"
        fill="#231F20"
      />
      <mask
        id="notChecked"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={4}
        width={12}
        height={8}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.576 12a.667.667 0 01-.486-.21L2.848 8.337a.666.666 0 11.97-.912l2.75 2.927 5.606-6.135a.667.667 0 01.985.899l-6.091 6.667A.665.665 0 016.58 12h-.004z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#notChecked)">
        <path fill="#B7BDCB" d="M0 0h16v16H0z" />
      </g>
    </svg>
  )
}

export default NotCheckedIcon
