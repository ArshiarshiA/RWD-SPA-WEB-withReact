import NavItem from './NavItem'
import './Nav.css'
import Social from '../SocialSec/Social'

export default function Nav() {

    const navItems = [
        { title: 'Home', to: '/', id: 1 },
        { title: 'Products', to: '/products', id: 2 },
        { title: 'Services', to: '/services', id: 3 },
        { title: 'Foresight', to: '/foresight', id: 4 }
    ]

    return (
        <>
        <nav className='nav'>
            <div className='list-container'>
                <ul>
                    <i className="fa fa-bars menu menu-active" aria-hidden="true"></i>
                    <span><i className="fa-solid fa-cart-shopping"></i></span>
                    <div className='list'>
                        {navItems.map(item => <NavItem key={item.id} title={item.title} to={item.to} />)}
                    </div>
                    <span><i className="fas fa-user"></i></span>
                </ul>
            </div>
        </nav>
        <Social />
        </>
    )
}