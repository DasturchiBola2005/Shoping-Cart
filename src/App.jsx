import React, { useState } from 'react'
import Amazon from './component/Amazon'
import Cart from './component/Cart'
import Navbar from './component/Navbar'


const App = () => {
  const [show, setShow] = useState("")
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)

  let handlerClick = (item) => {
    let isParrent = false
    cart.forEach((product) => {
      if (item.id === product.id)
        isParrent = true
    })
    if (isParrent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 2000)
      return;
    };
    setCart([...cart, item])
  }
  let handlerChange = (item, d) => {
    let ind = -1
    cart.forEach((data, index) => {
      if (data.id === item.id) 
        ind = index
    })

    let tempArr = cart
    tempArr[ind].ammount += d

    if (tempArr[ind].ammount === 0)
        tempArr[ind].ammount =  1;
    setCart([...tempArr])
  }
  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} />
      {
        show ? <Amazon handlerClick={handlerClick} /> : <Cart cart={cart} setCart={setCart} handlerChange={handlerChange} />
      }
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
    </div>
  )
}

export default App