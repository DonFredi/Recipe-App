import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-center font-bold py-12'>Page Not Found</h2>
            <p className='text-blue-800 underline m-5 py-8 text-center'><Link to="/">Visit the Homepage.</Link></p>

        </div >
    )
}

export default NotFound