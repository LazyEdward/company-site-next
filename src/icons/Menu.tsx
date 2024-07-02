// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { SVGProps } from "react"
const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
		role="menu"
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M4.5 27h27v-3h-27v3Zm0-7.5h27v-3h-27v3ZM4.5 9v3h27V9h-27Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Menu
