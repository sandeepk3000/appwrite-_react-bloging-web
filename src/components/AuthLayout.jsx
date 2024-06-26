import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
function AuthLayout({ children, authentication = true }) {
console.log(authentication);
console.log("djfksdjfksdjafkjasdkfjsakdjfksadjfkasd");
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.user.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    },[navigate,authStatus,authentication])
    return loader ? <h1 className='text-center text-red-500'>Loading...</h1> : <>{children}</>
}

export default AuthLayout