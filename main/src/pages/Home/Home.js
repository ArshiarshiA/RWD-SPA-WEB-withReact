import entryImg from '../../assets/images/image1.jpg'
import SimpleParallax from "simple-parallax-js";
import Header from '../../components/Header/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Home.css'
import './HomeRes.css'

export default function AboutSec() {
    return (
        <>
        <Header />
        <div className='aboutSec-container'>
            <div className='wid-50 left-side'>
                <p className='developer'>Arshia Mansury</p>
                <p className='pad-25'>Front Developer</p>
                <h1>WHY US</h1>
                <p className='pad-25 line-height'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo dolorem suscipit voluptatum omnis consequatur alias aliquid iure cum similique, eveniet laboriosam corporis architecto voluptates numquam, iste tenetur illum veritatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo dolorem suscipit voluptatum omnis consequatur alias aliquid iure cum similique, eveniet laboriosam corporis architecto voluptates numquam, iste tenetur illum veritatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo dolorem suscipit voluptatum omnis consequatur alias aliquid iure cum similique, eveniet laboriosam corporis architecto voluptates numquam, iste tenetur illum veritatis!</p>
                <a href="#">read more</a>
            </div>
            <div className='wid-50 right-side'>
                <SimpleParallax>
                    <img src={entryImg} alt="" />
                </SimpleParallax>
            </div>
        </div>
        <Footer />
        </>
    )
}