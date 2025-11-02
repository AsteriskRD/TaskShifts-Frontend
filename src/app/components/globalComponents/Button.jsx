import React from 'react'
import clsx from 'clsx'

const Button = ({variant, size, className, children, ...props}) => {
    const variantButton ={
        primary: "bg-[#003271] rounded-full px-4 py-1.5 text-white",
        secondary: "bg-white text-[#003271] rounded-full px-4 border border-[#003271] py-1.5",

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
