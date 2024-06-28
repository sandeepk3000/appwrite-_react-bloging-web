import React from 'react'
import { Link } from 'react-router-dom'
import Serive from '../../appwrite/config'
function MainLogo({ name = "" }) {
    return (
        < div className="inline-flex items-center space-x-2" >
            <span className="bg-orange-50 overflow-hidden rounded-full">
                <Link to={"/"}>
                    <img src={Serive.getFilePreview("667e5b4400052f8e7cac")} height={"50"} width={"50"} alt="" />

                </Link>
            </span>
            <span className="font-bold">
                {name}
            </span>
        </div >
    )
}

export default MainLogo 