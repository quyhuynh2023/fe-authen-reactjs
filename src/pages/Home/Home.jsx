import React, { useEffect } from 'react'
import jwtInterceptor from '../../components/shared/jwtInterceptor'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h2>home page</h2>
            <NavLink to='/profile'>profile (protected route)</NavLink>
            <NavLink to='/login'>login</NavLink>

        </div>
    )
}

export default Home