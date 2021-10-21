import * as React from "react"

function ContactIcon(props) {
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
        d="M14 7c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2zm2 0c0 2.206-1.794 4-4 4S8 9.206 8 7s1.794-4 4-4 4 1.794 4 4zM5 20c0-3.86 3.141-7 7-7s7 3.14 7 7a1 1 0 11-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 11-2 0z"
        fill="#231F20"
      />
      <mask
        id="contact"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={5}
        y={3}
        width={14}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 7c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2zm2 0c0 2.206-1.794 4-4 4S8 9.206 8 7s1.794-4 4-4 4 1.794 4 4zM5 20c0-3.86 3.141-7 7-7s7 3.14 7 7a1 1 0 11-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 11-2 0z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#contact)">
        <path fill="#707C97" d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

export default ContactIcon
