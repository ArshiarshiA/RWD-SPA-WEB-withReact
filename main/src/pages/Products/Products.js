import Header from '../../components/Header/Nav/Nav';
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card';
import data from '../../data'
import { useState } from 'react';
import './Products.css'

export default function Product() {

    let [itemData, setData] = useState(data)

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