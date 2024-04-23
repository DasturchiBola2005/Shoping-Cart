import React, { useEffect, useState } from 'react'
import "./cart.css"
const Cart = ({ cart, setCart,handlerChange }) => {
  const [price, setPrice] = useState(0)

  let handlerPrice = () => {
    let ans = 0
    cart.map((item) => (
      ans += item.ammount * item.price
    ))
    setPrice(ans)
  }

  let handletRemove = (id) => {
    let arr = cart.filter((item) => item.id !== id);
    setCart(arr)
  }


  useEffect(() => {
    handlerPrice()
  },)

  return (
    <article>
      {
        cart.map((item) => (
          <div key={item.id} className='cart_box'>
            <div className="cart_img">
              <img src={item.pruductImg} alt="" />
              <p>{item.productName}</p>
            </div>
            <div className="cart_child">
            <div>
              <button onClick={()=>handlerChange(item , +1)} className='px-2 py-[1px] rounded  text-white bg-slate-900 text-center'>+</button>
              <button className='text-center ml-3 font-bold'>{item.ammount}</button>
              <button onClick={()=>handlerChange(item ,-1)} className='px-2 py-[1px] rounded ml-4 text-white bg-slate-900 text-center'>-</button>
            </div>
            <div className='flex flex-col text-center'>
              <span className='font-bold mr-5 mb-2'>${item.price}</span>
              <button className='btn' onClick={() => handletRemove(item.id)}>Remove</button>
            </div>
            </div>
          </div>
        ))}
      <div className='cart_span flex justify-between text-4xl mt-5 mb-5'>
        <span className='font-bold'>Total Price of your Cart</span>
        <span className='text-green-500 font-bold mr-8'>Rs - ${price}</span>
      </div>
    </article>
  )
}

export default Cart