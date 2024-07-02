// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export type TModal = {
	active?: boolean,
	id: string,
	children?: ReactNode
}

const Modal = ({
	active = false,
	id = "",
	children
}: TModal) => {
	const ref = useRef<HTMLElement | null>(null)

	useEffect(() => {
		ref.current = document.getElementById(id)
	}, [id])

	return (
		active && ref.current ? createPortal(children, ref.current) : null
	)
}

export default Modal