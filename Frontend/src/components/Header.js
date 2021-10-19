import { Link } from "react-router-dom"
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <nav>
                <ul>
                    <li><Link to="/products"> Products</Link></li>
                    <li><Link to="/new"> NewProduct</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
