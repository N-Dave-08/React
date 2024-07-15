import PropTypes from 'prop-types';

function List({
    category = "Product Category",
    items = [{ id: 0, name: 'item name', price: 0 }],
}) {

    const listItems = items.map(item => <li key={item.id}>
        {item.name}: ${item.price}
    </li>);

    return (
        <>
            <h2>{category}</h2>
            <ol>
                {listItems}
            </ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
    })),
}

export default List