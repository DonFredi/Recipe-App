import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {


    return (
        <div className=' text-center py-3 h-[100vh]'>
            <h1 className='mb-10 text-3xl font-bold text-center'> Page Not Found</h1>
            <Link
                to="/"
                className='underline py-3 hover:no-underline'
            >Visit Homepage</Link>
        </div>
    )
}

export default NotFound