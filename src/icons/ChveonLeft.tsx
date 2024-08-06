// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { SVGProps } from "react"
const ChveonLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
		role="chveon-left"
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={27}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.765 27 17 23.828 6.493 13.5 17 3.172 13.765 0 0 13.5 13.765 27Z"
    />
  </svg>
)

export default ChveonLeft
