// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { SVGProps } from "react"
const YouTube = (props: SVGProps<SVGSVGElement>) => (
  <svg
		role="youTube"
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15 5s-7.818 0-9.768.523a3.129 3.129 0 0 0-2.21 2.21C2.5 9.682 2.5 15 2.5 15s0 5.318.522 7.268a3.129 3.129 0 0 0 2.21 2.21C7.182 25 15 25 15 25s7.818 0 9.768-.522a3.13 3.13 0 0 0 2.21-2.21C27.5 20.318 27.5 15 27.5 15s0-5.318-.523-7.268a3.131 3.131 0 0 0-2.209-2.21C22.818 5 15 5 15 5Zm0 2.5c3.602 0 8.114.167 9.121.437.211.056.385.23.442.442C24.864 9.502 25 12.928 25 15c0 2.073-.136 5.497-.437 6.621a.635.635 0 0 1-.442.442c-1.006.27-5.518.437-9.121.437-3.601 0-8.112-.167-9.121-.437a.635.635 0 0 1-.442-.442C5.136 20.5 5 17.073 5 15.001c0-2.073.136-5.5.437-6.624a.632.632 0 0 1 .442-.44C6.885 7.667 11.398 7.5 15 7.5Zm-2.5 3.17v8.661l7.5-4.33-7.5-4.332Z"
    />
  </svg>
)
export default YouTube
