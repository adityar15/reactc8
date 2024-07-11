import React from 'react'

export default function Button({
    children,
    className,
    ...props
}){
  return (
    <button className={`bg-gray-900 text-white rounded-md px-4 py-2 ${className}`} {...props}>
        {children}
    </button>
  )
}
