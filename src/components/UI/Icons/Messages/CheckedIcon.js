import * as React from "react"

function CheckedIcon(props) {
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
        d="M11.078 4.142a.665.665 0 00-.936.114L5.44 10.26 3.186 7.463a.667.667 0 00-1.04.836l2.78 3.452a.668.668 0 00.52.249h.005a.665.665 0 00.52-.256l5.22-6.667a.665.665 0 00-.114-.935zm3.333 0a.665.665 0 00-.935.114L8.771 10.26l-.403-.5-.843 1.079.733.911a.668.668 0 00.52.249h.005a.665.665 0 00.52-.256l5.22-6.667a.665.665 0 00-.113-.935zM6.653 7.63L5.81 8.707 5.48 8.3a.667.667 0 011.038-.836l.134.166z"
        fill="#231F20"
      />
      <mask
        id="checked"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={3}
        width={13}
        height={9}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.078 4.142a.665.665 0 00-.936.114L5.44 10.26 3.186 7.463a.667.667 0 00-1.04.836l2.78 3.452a.668.668 0 00.52.249h.005a.665.665 0 00.52-.256l5.22-6.667a.665.665 0 00-.114-.935zm3.333 0a.665.665 0 00-.935.114L8.771 10.26l-.403-.5-.843 1.079.733.911a.668.668 0 00.52.249h.005a.665.665 0 00.52-.256l5.22-6.667a.665.665 0 00-.113-.935zM6.653 7.63L5.81 8.707 5.48 8.3a.667.667 0 011.038-.836l.134.166z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#checked)">
        <path fill="#B7BDCB" d="M0 0h16v16H0z" />
      </g>
    </svg>
  )
}

export default CheckedIcon
