import Header from '../../components/Header/Nav/Nav';
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './Products.css'

export default function Product() {

    let [itemData, setData] = useState([])
    useEffect( () => {
        axios
            .get('http://localhost:5000/products')
            .then( response => setData(response.data))
    } , [])


    return (
        <>
            <Header />

            <section className='main-product-container'>
                <h2 className='title'>LEATHER PRODUCTS</h2>
                <div className='Cards-container'>
                    {itemData.map(dataIndex => <Card key={dataIndex.id} {...dataIndex} />)}
                </div>
            </section>

            <Footer />
        </>
    )
}