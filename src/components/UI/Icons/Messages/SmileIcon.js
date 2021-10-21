import * as React from "react"

function SmileIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={12}
        cy={12}
        r={10.75}
        stroke="#707C97"
        strokeOpacity={0.5}
        strokeWidth={2.5}
      />
      <path
        d="M7.636 13.636c.82 1.621 2.467 2.728 4.364 2.728 1.897 0 3.543-1.107 4.364-2.728"
        stroke="#707C97"
        strokeOpacity={0.5}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <circle
        cx={8.727}
        cy={8.727}
        r={1.091}
        fill="#707C97"
        fillOpacity={0.5}
      />
      <circle
        cx={15.273}
        cy={8.727}
        r={1.091}
        fill="#707C97"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SmileIcon
