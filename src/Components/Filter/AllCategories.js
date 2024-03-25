import Filter from "./Filter";

const AllCategories = () => {
    
    return (
        <div className="container">
        <div id="catalog" className="wrapp">
        <h2 > КАТАЛОГ</h2>
        <div className="all-categories" >
            
            {['ВСЕ КАТЕГОРИИ', 'КРЕМЫ', 'ТОНЕРЫ', 'ОЧИЩЕНИЕ' , 'СЫВОРОТКИ', 'МАСКИ' ].
            map(category => <Filter category={category}  /> )}
        </div>
        </div>
        </div>
    )

}

export default AllCategories;