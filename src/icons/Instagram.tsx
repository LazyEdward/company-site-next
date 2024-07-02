// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { SVGProps } from "react"
const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
		role="instagram"
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 3.75A6.257 6.257 0 0 0 3.75 10v10A6.257 6.257 0 0 0 10 26.25h10A6.257 6.257 0 0 0 26.25 20V10A6.257 6.257 0 0 0 20 3.75H10Zm0 2.5h10A3.755 3.755 0 0 1 23.75 10v10A3.755 3.755 0 0 1 20 23.75H10A3.755 3.755 0 0 1 6.25 20V10A3.755 3.755 0 0 1 10 6.25ZM21.25 7.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM15 8.75A6.257 6.257 0 0 0 8.75 15 6.257 6.257 0 0 0 15 21.25 6.257 6.257 0 0 0 21.25 15 6.257 6.257 0 0 0 15 8.75Zm0 2.5A3.755 3.755 0 0 1 18.75 15 3.755 3.755 0 0 1 15 18.75 3.755 3.755 0 0 1 11.25 15 3.755 3.755 0 0 1 15 11.25Z"
    />
  </svg>
)
export default Instagram
