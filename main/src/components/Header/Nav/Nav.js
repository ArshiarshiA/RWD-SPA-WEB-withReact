import NavItem from './NavItem'
import './Nav.css'
import Social from '../SocialSec/Social'
import { useState } from 'react'

export default function Nav() {

    const [items, setItems] = useState(
        [
            { title: 'Home', to: '/', id: 1 },
            { title: 'Products', to: '/products', id: 2 },
            { title: 'Services', to: '/services', id: 3 },
            { title: 'Foresight', to: '/foresight', id: 4 },
            { title: 'Add Product' , to: '/addProduct', id: 5}
        ]
    )

    return (
        <>
            <header>
                <nav className='nav'>
                    <div className='list-container'>
                        <ul>
                            <i className="fa fa-bars menu menu-active" aria-hidden="true"></i>
                            <span><i className="fa-solid fa-cart-shopping"></i></span>
                            <div className='list'>
                                {items.map(item => <NavItem key={item.id} title={item.title} to={item.to} />)}
                            </div>
                            <span><i className="fas fa-user"></i></span>
                        </ul>
                    </div>
                </nav>
                <Social />
            </header>
        </>
    )
}