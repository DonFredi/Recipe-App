import React, { useContext } from 'react'
import DataContext from './DataContext'

const NotFound = () => {
    const { error } = useContext(DataContext)

    return (
        <div className='text-yellow-400'>
            <h1>404 Not Found</h1>
            {error &
                <p>{error}</p>
            }
        </div>
    )
}

export default NotFound