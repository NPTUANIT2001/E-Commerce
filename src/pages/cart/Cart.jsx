import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.css';
const Cart = () => {
  return (
  <>
    <div className="cartcontainer">
      <div className="emptycart">
        <h2 className="empty">Cart is Empty</h2>
        <Link to='/product' className="emptycartbtn">Shop now</Link>
      </div>        
    </div>
  </>
  )
}

export default Cart