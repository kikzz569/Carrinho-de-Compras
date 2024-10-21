import { FaShoppingCart } from "react-icons/fa";
import { TbShirtSport } from "react-icons/tb";
import styles from './Navbar.module.css';

function Navbar({ Carshop, handleSearch, ItemsCount }) {
    return (
        <header className={styles.container_nav}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <TbShirtSport className={styles.icon}/>
                    <h1>Mantos Históricos</h1>
                </div>

                <div className={styles.search}>
                    <input type="search" placeholder='pesquise aqui' onChange={(e) => handleSearch(e.target.value)}/>
                </div>

                <button 
                className={` ${styles.carshop} ${ItemsCount > 0 ? styles.carshopfull : ''}`}
                onClick={Carshop}>
                <FaShoppingCart className={styles.carshop_icon}/>
                </button>

            </nav>
        </header>
    )
}

export default Navbar;