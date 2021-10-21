import * as React from "react"

function VideoIcon(props) {
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
        d="M19 18.256c0 .41-.334.744-.744.744H17v-2h2v1.256zm-14 0V17h2v2H5.744A.745.745 0 015 18.256zM5.744 5H7v2H5V5.744c0-.41.334-.744.744-.744zM19 5.744V7h-2V5h1.256c.41 0 .744.334.744.744zM17 15h2v-2h-2v2zm0-4h2V9h-2v2zm-8 8h6V5H9v14zm-4-4h2v-2H5v2zm0-4h2V9H5v2zm13.256-8H5.744A2.748 2.748 0 003 5.744v12.512A2.747 2.747 0 005.744 21h12.512A2.747 2.747 0 0021 18.256V5.744A2.748 2.748 0 0018.256 3z"
        fill="#fff"
      />
      <mask
        id="video"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={2}
        width={18}
        height={19}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 18.256c0 .41-.334.744-.744.744H17v-2h2v1.256zm-14 0V17h2v2H5.744A.745.745 0 015 18.256zM5.744 5H7v2H5V5.744c0-.41.334-.744.744-.744zM19 5.744V7h-2V5h1.256c.41 0 .744.334.744.744zM17 15h2v-2h-2v2zm0-4h2V9h-2v2zm-8 8h6V5H9v14zm-4-4h2v-2H5v2zm0-4h2V9H5v2zm13.256-8H5.744A2.748 2.748 0 003 5.744v12.512A2.747 2.747 0 005.744 21h12.512A2.747 2.747 0 0021 18.256V5.744A2.748 2.748 0 0018.256 3z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#video)">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

export default VideoIcon
