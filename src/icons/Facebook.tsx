// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { SVGProps } from "react"
const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
		role="facebook"
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15 2.5C8.111 2.5 2.5 8.111 2.5 15S8.111 27.5 15 27.5 27.5 21.89 27.5 15 21.889 2.5 15 2.5ZM15 5c5.538 0 10 4.463 10 10a9.971 9.971 0 0 1-8.477 9.873v-6.892h2.91l.457-2.956h-3.367v-1.617c0-1.228.4-2.319 1.55-2.319h1.846V8.51c-.325-.044-1.01-.14-2.307-.14-2.707 0-4.294 1.43-4.294 4.688v1.968h-2.783v2.956h2.783v6.868A9.972 9.972 0 0 1 5 15C5 9.463 9.462 5 15 5Z"
    />
  </svg>
)
export default Facebook
