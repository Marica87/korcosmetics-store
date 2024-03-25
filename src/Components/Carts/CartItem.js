
import CartItemTwo from "./CartItemTwo"
import { getTotalPrice } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

const CartItem = ({cartItems}) => {

   const totalPrice = useSelector(getTotalPrice)


    
    return (
        

        <div className="cart-menu" >
           <div className="cart-menu-item"  >
              {
              cartItems.length > 0 ? cartItems.map(cartItem => <CartItemTwo cartItem={cartItem} />) : <p className="cart-empty">КОРЗИНА ПУСТА</p> 
              }
           </div>

           {
           cartItems.length >  0 ? 
            <div className="cart-menu-arrange">
                <div className="cart-menu-total-price">
                    
                    <p>Итого: {totalPrice} ₽</p>
                </div>

            </div>
            : null
        }  

        </div>
        
    )

}

export default CartItem;

