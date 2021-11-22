import usePromise from '../../hooks/usePromise';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import data from '../Item/Item'


const ItemListContainer = (props) => {
    const { res, isLoading } = usePromise(data)

    return (
        <section>
            <h1>{props.greeting}</h1>
            {isLoading && <span>Loading...</span>}
            {res.map((item) => <ItemList {...item} />)}
        </section>
    )
}

export default ItemListContainer
