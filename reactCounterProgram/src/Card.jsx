import PropTypes from 'prop-types'

function Card({
    name = "Product Name",
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}) {
    return (
        <div className="card">
            <img src="https://via.placeholder.com/150" alt="" />
            <h1 className="cardTitle">{name}</h1>
            <p className="cardDescription">{desc}</p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
}


export default Card