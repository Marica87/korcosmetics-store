import dataCosmetic from "../../data/dataCosmetic";
import AllProduct from "./AllProduct";
import { getSelectedCategory } from "../../redux/cosmeticSlice";
import { useSelector } from "react-redux";

const Product = () => {

    const selectedCategory = useSelector(getSelectedCategory) 

    return (
    <div className="container">
        <div className="section" >
        {dataCosmetic
        .filter(beaty => {
            if (selectedCategory === 'ВСЕ КАТЕГОРИИ') return true;
            return selectedCategory === beaty.category;
        })
        .map(beaty => <AllProduct beaty={beaty} key={beaty.id} />)}
    </div>
    </div>)
}

export default Product;