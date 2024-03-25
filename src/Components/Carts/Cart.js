import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useState } from "react";
import ItemInCart from "./ItemInCart";

const Cart = () => {

  const cartItems = useSelector(getCartItems);
  const [openCart, setOpenCart] = useState(false)
  
 
  
  return (

    <div  className='cart'>
                    <ItemInCart quantityItem={cartItems} />
                    <button className= "iconshop"   onClick={() => setOpenCart(!openCart)}>
                    <MdOutlineShoppingBag  size={37} />
                    </button>
                    
                    {openCart && <CartItem cartItems={cartItems} />}
                    
                    </div>
  )
}

export default Cart;