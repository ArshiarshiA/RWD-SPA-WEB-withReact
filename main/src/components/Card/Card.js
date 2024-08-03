import { Link } from "react-router-dom";
import './Card.css'
import './CardRes.css'

export default function ({ id , img , name , price , category , secCategory }) {
    return (
        <>
            <div className="item">
                <div className="item-content">
                    <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <img src={img} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <p className="category">
                            <i className="far fa-list-alt"></i>
                            Category : {category} , {secCategory}
                        </p>
                        <div className="body-card">
                            <div className="info-body-card">
                                <i className="fa-solid fa-tag"></i>
                                <p>{price}</p>
                            </div>
                            <button>
                                <Link to={`/pricing/${id}`}>Shopping</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}