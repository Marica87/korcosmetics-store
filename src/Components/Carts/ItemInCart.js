const ItemInCart = ({ quantityItem }) => {
   
   
  

    return (
        <div>
            
            < span className="cart-span">  {quantityItem.reduce((accum,item) => accum + item.quantity, 0)}</span>
        </div>
        
        
        
    ) }   


export default ItemInCart;