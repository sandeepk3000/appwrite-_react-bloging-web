import React from 'react'
import Button from './Button'

function HomeSections({children,name}) {
  return (
    <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 className="font-bold text-3xl">{name}</h2>
         {children}
        </div>
  )
}

export default HomeSections