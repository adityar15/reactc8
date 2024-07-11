import React from 'react'

export default function Input({className, ...props}) {
  return (
    <input className={`px-3 py-2 border border-gray-400 rounded-md ${className}`} {...props} />
  )
}
