import React, { forwardRef, useId } from 'react'

function TextArtea({ label, className = "px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800", rows = "6", cols, ...props }, ref) {
    const id = useId()
    return (
        <>
            {label && (<label for={id} className="sr-only">{label}</label>)}
            <textarea id={id} className={`${className}`} ref={ref}{...props} ></textarea>
        </>
    )
}

export default forwardRef(TextArtea)