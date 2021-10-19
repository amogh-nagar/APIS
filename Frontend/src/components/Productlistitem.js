import { Link } from "react-router-dom"
const Productlistitem = (props) => {
    return (
        <div>
            {props.item.name}
            <Link to={`/products/${props.item.id}`}>View</Link>
        </div>
    )
}

export default Productlistitem
