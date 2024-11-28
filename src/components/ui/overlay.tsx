import * as React from "react"

const Overlay = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {isVisible : boolean}
>(({ className, children, isVisible, ...props }, ref) => {

	return (
		<div
			data-sonner-toast
			ref={ref}
			role="overlay"
			className={`overlay `}
			{...props}
		>
			<div className="w-full h-full bg-black-80/50">
					{children}
			</div>
		</div>
	)
})