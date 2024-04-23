import React from 'react'
import "./cards.css"
const Cards = ({item ,handlerClick}) => {
  return (
    <div className='cards'>
        <div className="image_box">
            <img src={item.pruductImg} alt="Image" />
        </div>
        <div className="details">
            <p>{item.productName}</p>
            <p>{item.auther}</p>
            <p>Price - ${item.price}</p>
            <button onClick={()=>handlerClick(item)}>Add to Cart </button>
        </div>
    </div>
  )
}

export default Cards