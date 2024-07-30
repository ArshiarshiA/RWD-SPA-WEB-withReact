import { Link } from 'react-router-dom'
import AboutSec from '../MainWhyUsCompo/AboutSec'
import './er404.css'
import Footer from '../Footer/Footer'

export default function Er404() {
    return (
        <>
            <div className="error-container">
                <div className='content-container'>
                    <h1>404</h1>
                    <p>Error occurred - File not found</p>
                    <Link to='/'>Back</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}