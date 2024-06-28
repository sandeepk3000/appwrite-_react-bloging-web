import React from 'react'
import { Link } from 'react-router-dom'
function MainLogo({ name = "" }) {
    return (
        < div className="inline-flex items-center space-x-2" >
            <span className="bg-orange-50 overflow-hidden rounded-full">
                <Link to={"/"}>
                    <img src="src\assets\IMG-20240627-WA0000.jpg" height={"50"} width={"50"} alt="" />

                </Link>
            </span>
            <span className="font-bold">
                {name}
            </span>
        </div >
    )
}

export default MainLogo 