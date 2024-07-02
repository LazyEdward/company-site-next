// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { SVGProps } from "react"
const ArrowForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
		role="arrow-forward"
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="m9 2.576-1.058.892 4.185 3.537H3v1.266h9.127l-4.185 3.537L9 12.7l6-5.062-6-5.062Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .045h18V15.23H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default ArrowForward
