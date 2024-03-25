import { HiOutlineXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { removeItemFromCart, decrementQuantity, incrementQuantity } from "../../redux/cartSlice";





const CartItemTwo = ({cartItem}) => {

 
   const dispatch = useDispatch();
   console.log(cartItem)
 
    return (
        <div className="cart-product" >
            <div className="cart-img">
            { <img src={`${cartItem.img}.png`} alt="cosm"  /> }
            
                       
            </div>

            <div className="cart-name">
                
                
                <p className="name">{cartItem.name}</p>
                <p className="cost">{cartItem.price * cartItem.quantity} ₽</p>
                <div className="cart-quantity">
                    <div className="quant">
                    <button onClick={() => dispatch(decrementQuantity({cartItem: cartItem.id}))} >-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity({cartItem: cartItem.id}))}>+</button>
                    </div>
                
            <button className="icondel" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} >
            <HiOutlineXMark   size="35px" />
            </button>
            
                </div>
              
            
            
            </div>
            
        </div>
    )
}

export default CartItemTwo;