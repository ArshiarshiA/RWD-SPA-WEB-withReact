import { Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Header/Nav/Nav";
import './Price.css'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Price() {
    
    const navigate = useNavigate()
    const { id } = useParams();   
    let [resData , setResData] = useState({})
    let {name , price , img , category , secCategory} = resData

    useEffect( () => {
        axios
        .get(`http://localhost:5000/products/${id}`)
        .then( response => setResData(response.data) )
    } , [] )

    const deleteHandler = () => {        
        axios
        .delete(`http://localhost:5000/products/${id}`)
        .then( () => navigate('/products') )
    }
    
    return (
        <>
            <Nav />
            <section>
                <div className="item-product">
                    <div className="item-product-content">
                        <div className="icon-container">
                            <h1>{name}</h1>
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                        <div className="icon-container">
                            <p>{`${category} , ${secCategory}`}</p>
                            <i className="fas fa-tags"></i>
                        </div>
                        <img src={img} alt="" />
                        <div className="icon-container">
                            <p>Price : {price}</p>
                            <button className="buttonStyle">Add to cart</button>
                        </div>
                        <div>
                            <button onClick={deleteHandler} className="buttonStyle">
                            <i style={{marginRight: '10px'}} className="fa fa-trash" aria-hidden="true"></i> 
                            Delete Product   
                            </button>
                        </div>
                    </div>
                </div>
                <div className="desc-container">
                    <div>
                        <div><h1>Description :</h1></div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusantium velit eaque cumque recusandae corrupti alias illum consequuntur possimus ut magni, illo, explicabo voluptatum, est odit iusto dolorum? Expedita, nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id maiores dolorem obcaecati natus quisquam, aut, porro rerum illum tempore dolore earum dolor voluptas dolorum vero veniam illo impedit iusto!
                            Sed minus iste provident distinctio molestias pariatur officiis quisquam. Voluptatem esse perspiciatis quidem. Reiciendis assumenda expedita, eum optio fuga a blanditiis, vero porro nesciunt est sint reprehenderit quibusdam accusantium eaque.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}