import React, { useEffect, useState } from 'react'
import jwtInterceptor from '../../components/shared/jwtInterceptor'

function Profile() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await jwtInterceptor.get("https://api-authen-nodejs.onrender.com/")
        setData(res.data)
    }
    return (
        <div>
            {data}</div>
    )
}

export default Profile