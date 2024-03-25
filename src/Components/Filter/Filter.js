import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/cosmeticSlice";

const Filter = ({category}) => {

    const dispetch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory)

    return (
        <div >
            
            <button  onClick={() => {dispetch(filterCategory(category))}}  className={selectedCategory === category ?  'btn-click btn-ctgr'  : 'btn-ctgr btn-ctgrtwo'} >{category}</button>
        </div>
    )
}

export default Filter;