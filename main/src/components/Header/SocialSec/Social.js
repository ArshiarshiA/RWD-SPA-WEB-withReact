import './Social.css'
import logo from '../../../assets/images/MAM.png'

export default function Social() {
    return (
        <div className="social-container">
            <div className="social-item-container">
                <div className='social-item'>
                    <i className="far fa-envelope"></i>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">My Email</a>
                </div>
                <img src={logo} alt="" />
                <div className='social-item'>
                    <a href="tel:09154748708">My Phone Number</a>    
                    <i className="far fa-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}