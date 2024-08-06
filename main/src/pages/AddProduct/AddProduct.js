import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Header/Nav/Nav";
import './AddProduct.css'
import axios from "axios";

export default function AddProduct(){

    let [objData , setObjData] = useState({})

    const putDataHandler = (e , propertyName) => {
        setObjData({...objData , [propertyName] : e.target.value})
    }

    const postHandler = () => {
        axios
        .post('http://localhost:5000/products' , objData)
    }

    return(
        <>
        <Nav />

        <section>
            <div className="form-container">
                <form action="http://localhost:5000/products" method="get">
                <div className="input-section">
                    <label>ADD TITLE PRODUCT</label>
                    <input onChange={(e) => putDataHandler(e , 'name')} type="text" placeholder="ADD TITLE PRODUCT" />
                </div>
                <div className="input-section">
                    <label>ADD PRICE</label>
                    <input onChange={(e) => putDataHandler(e , 'price')} type="text" placeholder="ADD PRICE" />
                </div>
                <div className="input-section">
                    <label>ADD IMAGE PRODUCT</label>
                    <input onChange={(e) => putDataHandler(e , 'img')} type="text" placeholder="ADD IMAGE PRODUCT" />
                </div>
                <div className="input-section">
                    <label>ADD CATEGORY</label>
                    <input onChange={(e) => putDataHandler(e , 'category')} type="text" placeholder="ADD CATEGORY" />
                </div>
                <div className="input-section">
                    <label>ADD SECONDARY CATEGORY</label>
                    <input onChange={(e) => putDataHandler(e , 'secCategory')} type="text" placeholder="ADD SECONDARY CATEGORY" />
                </div>
                <input onClick={postHandler} type="submit" />
                </form>
            </div>
        </section>

        <Footer />
        </>
    )
}