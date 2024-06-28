import React, { forwardRef, useId } from 'react'
function Select({ label, className, options, ...props }, ref) {
  const id = useId()
  return (
    <> {label && (<label for={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>)}
      <select
        id={id}
        ref={ref}
        className={`${className}`}
        {...props}
      >
        {options?.map((option,i) => (
          <option key={option} value={i === 0 ? "":option}>{option}</option>
        ))}
      </select>
    </>
  )
}

export default forwardRef(Select)