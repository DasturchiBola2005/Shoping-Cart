import React from 'react'
import "./navbar.css"
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = ({size ,setShow}) => {
    return (
        <nav>
            <div className="nav_box">
                <span  className='my_shop bg-green-500 px-5 rounded-xl' onClick={()=>setShow(true)}>
                    Sotuv Bo'limi
                </span>
                <div className="cart" onClick={()=>setShow(false)}>
                    <span><FaCartArrowDown /></span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar