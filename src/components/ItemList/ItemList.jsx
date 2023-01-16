import Item from "../Item/Item";
import './ItemList.css';

function ItemList( { cursos } ) {
    return (
        <div className="item-list">
            <div className="container-fluid">
                
                    {
                        cursos.map( product => (
                            <Item {...product} key={product.id} />
                        ))
                    }
                
            </div>
        </div>
    )     
}

export default ItemList;