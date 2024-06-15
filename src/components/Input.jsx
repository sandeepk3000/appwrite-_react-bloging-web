import React, { forwardRef, useId } from 'react'
function Input({label,type="text",className="",...props},ref) {
    const id = useId()
  return (
   <>
   {label && (<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={id}>{label}</label>)}
   <input className={`${className}`} {...props} ref={ref} type={type}/>
   </>
  )
}

export default forwardRef(Input)