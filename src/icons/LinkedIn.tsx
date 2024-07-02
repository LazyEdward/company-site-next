// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { SVGProps } from "react"
const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
		role="linkedIn"
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.25 3.75a2.5 2.5 0 0 0-2.5 2.5v17.5a2.5 2.5 0 0 0 2.5 2.5h17.5a2.5 2.5 0 0 0 2.5-2.5V6.25a2.5 2.5 0 0 0-2.5-2.5H6.25Zm0 2.5h17.5v17.5H6.25V6.25Zm3.474 1.646c-1.071 0-1.714.644-1.714 1.501 0 .858.643 1.5 1.607 1.5 1.07 0 1.714-.642 1.714-1.5 0-.857-.643-1.501-1.607-1.501ZM8.096 12.5v8.75h3.154V12.5H8.096Zm5.756 0v8.75h3.155v-4.782c0-1.424 1.016-1.629 1.32-1.629.306 0 1.121.306 1.121 1.629v4.782H22.5v-4.782c0-2.747-1.22-3.968-2.747-3.968-1.526 0-2.34.508-2.746 1.22V12.5h-3.155Z"
    />
  </svg>
)
export default LinkedIn
