import * as React from "react"

const Overlay = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {isVisible : boolean}
>(({ className, children, isVisible, ...props }, ref) => {

	return (
		<div
			ref={ref}
			role="overlay"
			className="w-full h-full bg-black-80/50"
			{...props}
		>
		</div>
	)
})

export {Overlay}