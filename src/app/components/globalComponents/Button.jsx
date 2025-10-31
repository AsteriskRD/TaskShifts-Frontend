import React from 'react'
import clsx from 'clsx'

const Button = ({variant, size, className, children, ...props}) => {
    const variantButton ={
        primary: "bg-[var(--header)] rounded-full px-4 py-1.5 text-white",
        secondary: "bg-white text-[var(--header)] rounded-full px-4 border border-[var(--header)] py-1.5",

    }
    const sizeButton = {
        sm: "text-sm  w-30",
        md: "text-md",
        lg: "text-lg"
    }
  return (
    <div>
      <button className={clsx(variantButton[variant], sizeButton[size], children, className)}{...props}>
        {children}

      </button>
    </div>
  )
}

export default Button
