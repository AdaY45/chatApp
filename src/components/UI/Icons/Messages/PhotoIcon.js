import * as React from "react"

function PhotoIcon(props) {
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
        d="M8 10a1.5 1.5 0 10-.001-3.001A1.5 1.5 0 008 10zm10 9H6.561l7.005-5.845c.246-.209.692-.208.933-.001L19 16.994V18a1 1 0 01-1 1zM6 5h12a1 1 0 011 1v8.364l-3.203-2.732c-.99-.842-2.539-.842-3.52-.006L5 17.698V6a1 1 0 011-1zm12-2H6C4.346 3 3 4.346 3 6v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3z"
        fill={props.active ? "#2A8BF2" : "#fff"}
      />
      <mask
        id="photo"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={3}
        width={18}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 10a1.5 1.5 0 10-.001-3.001A1.5 1.5 0 008 10zm10 9H6.561l7.005-5.845c.246-.209.692-.208.933-.001L19 16.994V18a1 1 0 01-1 1zM6 5h12a1 1 0 011 1v8.364l-3.203-2.732c-.99-.842-2.539-.842-3.52-.006L5 17.698V6a1 1 0 011-1zm12-2H6C4.346 3 3 4.346 3 6v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3z"
          fill={props.active ? "#2A8BF2" : props.isFile ? "#FF3366" : "#fff"}
        />
      </mask>
      <g mask="url(#photo)">
        <path fill={props.active ? "#2A8BF2" : props.isFile ? "#FF3366" : "#fff"} d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

export default PhotoIcon
