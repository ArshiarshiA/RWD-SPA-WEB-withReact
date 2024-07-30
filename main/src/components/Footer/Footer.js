import logo from '../../assets/images/MAM.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <ul className='footer-list'>
                    <li>
                        <img src={logo} alt="" />
                        <p className='under-logo-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis qui dicta suscipit consequuntur.</p>
                        <div className='icons'>
                            <a href="#"><span><i className="fa-brands fa-facebook"></i></span></a>
                            <a href="#"><span><i className="fa-brands fa-x-twitter"></i></span></a>
                            <a href="#"><span><i className="fa-brands fa-instagram"></i></span></a>
                            <a href="#"><span><i className="fa-brands fa-linkedin"></i></span></a>
                        </div>
                    </li>
                    <li>
                        <h2>ACCOUNT</h2>
                        <p><a href="">Profile</a></p>
                        <p><a href="">Billing</a></p>
                        <p><a href="">Notificatio</a></p>
                    </li>
                    <li>
                        <h2>ABOUT US</h2>
                        <p><a href="">Service</a></p>
                        <p><a href="">Pricing</a></p>
                        <p><a href="">Contact</a></p>
                        <p><a href="">Career</a></p>
                    </li>
                    <li>
                        <h2>COMPANY</h2>
                        <p><a href="">Community</a></p>
                        <p><a href="">Help Center</a></p>
                        <p><a href="">Support</a></p>
                    </li>
                </ul>
                <hr className='line' />
                <div className='bot-fot-side'>
                    <p className='developer'><i className="fa-brands fa-github"></i> Design & Development : <a href="https://github.com/ArshiarshiA">Arshia mansury</a></p>
                    <p className='copyright'>All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}