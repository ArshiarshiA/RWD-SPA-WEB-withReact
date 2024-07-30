import entryImg from '../../assets/images/image2.jpg'

export default function Product() {
    return (
        <div className='aboutSec-container'>
            <div className='wid-50 left-side'>
                <p className='developer'>Arshia Mansury</p>
                <p className='pad-25'>Front Developer</p>
                <h1>PRODUCTS</h1>
                <p className='pad-25 line-height'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo dolorem suscipit voluptatum omnis consequatur alias aliquid iure cum similique, eveniet laboriosam corporis architecto voluptates numquam, iste tenetur illum veritatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo dolorem suscipit voluptatum omnis consequatur alias aliquid iure cum similique, eveniet laboriosam corporis architecto voluptates numquam, iste tenetur illum veritatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo dolorem suscipit voluptatum omnis consequatur alias aliquid iure cum similique, eveniet laboriosam corporis architecto voluptates numquam, iste tenetur illum veritatis!</p>
                <a href="#">read more</a>
            </div>
            <div className='wid-50 right-side'>
                <img src={entryImg} alt="" />
            </div>
        </div>
    )
}