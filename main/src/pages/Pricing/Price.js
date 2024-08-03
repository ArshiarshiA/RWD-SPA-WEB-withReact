import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Header/Nav/Nav";
import data from "../../data";
import './Price.css'

export default function Price() {

    let { id } = useParams()
    let dataItem = data.find( dataBlock => dataBlock.id == id )
    let {name , price , img , category , secCategory} = dataItem;

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
                            <button>Add to cart</button>
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