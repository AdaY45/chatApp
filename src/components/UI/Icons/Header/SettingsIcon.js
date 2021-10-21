import * as React from "react"

function SettingsIcon(props) {
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
        d="M11.374 20h1.252v-.767c0-.935.575-1.775 1.463-2.142.92-.383 1.926-.195 2.588.471l.538.541.889-.888-.546-.544c-.663-.662-.85-1.666-.477-2.557l.002-.002.01-.028a2.324 2.324 0 012.14-1.459H20v-1.25h-.767c-.934 0-1.776-.575-2.142-1.464-.385-.92-.196-1.925.47-2.588l.541-.539-.887-.887-.544.545c-.662.662-1.665.849-2.556.477-.914-.377-1.49-1.217-1.49-2.152V4h-1.25v.767c0 .935-.575 1.775-1.464 2.142-.92.385-1.924.196-2.587-.471l-.54-.541-.887.888.545.544c.662.662.85 1.666.477 2.557-.376.913-1.217 1.489-2.152 1.489H4v1.25h.767c.935 0 1.776.575 2.142 1.464.385.92.196 1.925-.47 2.588l-.541.539.887.887.545-.545c.662-.662 1.665-.849 2.556-.477.913.377 1.489 1.217 1.489 2.152V20zm1.569 2H11.05a1.678 1.678 0 01-1.675-1.676v-1.091c0-.147-.117-.248-.227-.293-.144-.059-.298-.071-.404.032l-.77.771a1.683 1.683 0 01-2.377 0l-1.34-1.34a1.67 1.67 0 01-.492-1.19c0-.449.176-.871.495-1.189l.768-.765c.105-.105.094-.259.047-.37-.06-.147-.16-.264-.308-.264H3.683A1.684 1.684 0 012 12.943v-1.892c0-.925.752-1.676 1.677-1.676h1.09c.147 0 .248-.118.293-.228.06-.144.072-.299-.032-.403l-.771-.77a1.685 1.685 0 010-2.377l1.34-1.34a1.667 1.667 0 011.188-.492h.002c.449 0 .872.175 1.189.494l.765.769c.105.106.26.094.37.047.147-.061.264-.161.264-.308V3.683c0-.928.755-1.683 1.682-1.683h1.893c.924 0 1.676.752 1.676 1.676v1.091c0 .147.117.248.226.293.146.06.3.073.405-.032l.77-.771a1.683 1.683 0 012.377 0l1.34 1.341c.319.317.492.739.491 1.189 0 .448-.174.871-.494 1.188l-.768.766c-.105.105-.095.259-.047.37.06.147.16.264.308.264h1.083c.928 0 1.683.754 1.683 1.682v1.892c0 .925-.752 1.676-1.677 1.676h-1.09c-.146 0-.248.118-.293.228l-.014.033c-.045.111-.057.266.047.37l.77.77a1.685 1.685 0 010 2.377l-1.34 1.34a1.667 1.667 0 01-1.188.492h-.002c-.448 0-.872-.175-1.189-.494l-.765-.769c-.104-.105-.26-.093-.37-.047-.146.061-.263.161-.263.308v1.084c0 .928-.755 1.683-1.683 1.683zM12 10.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0 5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
        fill="#231F20"
      />
      <mask
        id="settings"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={2}
        width={21}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.374 20h1.252v-.767c0-.935.575-1.775 1.463-2.142.92-.383 1.926-.195 2.588.471l.538.541.889-.888-.546-.544c-.663-.662-.85-1.666-.477-2.557l.002-.002.01-.028a2.324 2.324 0 012.14-1.459H20v-1.25h-.767c-.934 0-1.776-.575-2.142-1.464-.385-.92-.196-1.925.47-2.588l.541-.539-.887-.887-.544.545c-.662.662-1.665.849-2.556.477-.914-.377-1.49-1.217-1.49-2.152V4h-1.25v.767c0 .935-.575 1.775-1.464 2.142-.92.385-1.924.196-2.587-.471l-.54-.541-.887.888.545.544c.662.662.85 1.666.477 2.557-.376.913-1.217 1.489-2.152 1.489H4v1.25h.767c.935 0 1.776.575 2.142 1.464.385.92.196 1.925-.47 2.588l-.541.539.887.887.545-.545c.662-.662 1.665-.849 2.556-.477.913.377 1.489 1.217 1.489 2.152V20zm1.569 2H11.05a1.678 1.678 0 01-1.675-1.676v-1.091c0-.147-.117-.248-.227-.293-.144-.059-.298-.071-.404.032l-.77.771a1.683 1.683 0 01-2.377 0l-1.34-1.34a1.67 1.67 0 01-.492-1.19c0-.449.176-.871.495-1.189l.768-.765c.105-.105.094-.259.047-.37-.06-.147-.16-.264-.308-.264H3.683A1.684 1.684 0 012 12.943v-1.892c0-.925.752-1.676 1.677-1.676h1.09c.147 0 .248-.118.293-.228.06-.144.072-.299-.032-.403l-.771-.77a1.685 1.685 0 010-2.377l1.34-1.34a1.667 1.667 0 011.188-.492h.002c.449 0 .872.175 1.189.494l.765.769c.105.106.26.094.37.047.147-.061.264-.161.264-.308V3.683c0-.928.755-1.683 1.682-1.683h1.893c.924 0 1.676.752 1.676 1.676v1.091c0 .147.117.248.226.293.146.06.3.073.405-.032l.77-.771a1.683 1.683 0 012.377 0l1.34 1.341c.319.317.492.739.491 1.189 0 .448-.174.871-.494 1.188l-.768.766c-.105.105-.095.259-.047.37.06.147.16.264.308.264h1.083c.928 0 1.683.754 1.683 1.682v1.892c0 .925-.752 1.676-1.677 1.676h-1.09c-.146 0-.248.118-.293.228l-.014.033c-.045.111-.057.266.047.37l.77.77a1.685 1.685 0 010 2.377l-1.34 1.34a1.667 1.667 0 01-1.188.492h-.002c-.448 0-.872-.175-1.189-.494l-.765-.769c-.104-.105-.26-.093-.37-.047-.146.061-.263.161-.263.308v1.084c0 .928-.755 1.683-1.683 1.683zM12 10.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0 5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#settings)">
        <path fill="#707C97" d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

export default SettingsIcon
