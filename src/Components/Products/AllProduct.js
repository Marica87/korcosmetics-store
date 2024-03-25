import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";




const AllProduct = ({beaty}) => {
    
    let quantity = 1
    
    const dispatch = useDispatch();
    
    
    
    

 

    

    return (
        <div>
        <div className="section_content">
            <img src={`${beaty.img}.png`} alt="cosmetic" width='170px' />
            <h4 className="brand">{beaty.brand}</h4>
            <p className="cosm">{beaty.name}</p>
            <p className="price">{beaty.price} ₽</p>
            
            
           <div className="section_btn">    
                
                   <button className="btn-cart" onClick={() => {dispatch(addItemToCart({beaty, quantity})) }}> В КОРЗИНУ </button>
                 
                 
                
                
            </div>     
            </div>  
        </div>
    )
}

export default AllProduct;