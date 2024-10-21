import { FaTimes } from "react-icons/fa";
import styles from './Carshop.module.css';
import { FaTrashAlt } from "react-icons/fa";

function Carshopbar({ active, items, setItems }) {

    const closeCarshop = () => {
        active(false)
    }

    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    const subtotal = items.reduce((acc, item) => acc + item.price, 0);
    const frete = 0;
    const Total = subtotal + frete

    return(
        <header Carshopbar={active} className={styles.container_carshop}>
            <FaTimes onClick={closeCarshop} />
            <div>
                <h1>Seu Carrinho:</h1>
            </div>
            <div className={styles.card_container}>
                {items.map(item => (
                    <div key={item.id} className={styles.card}>
                        <img src={`../public/img/${item.image}`} alt={item.name} />
                        <div className={styles.text_card}>
                            <p>Nome: <span>{item.name}</span></p>
                            <p>Valor: <span>R${item.price}</span></p>
                        </div>
                        <button className={styles.trash} onClick={() => removeItem(item.id)}><FaTrashAlt/></button>
                    </div>
                ))}
            <div className={styles.finalPrice}> 
                <h3>Preço final:</h3>
                <p>sub-total: R${subtotal.toFixed(2)}</p>
                <p>Frete: {frete}</p>
                <span>Total: R${Total.toFixed(2)}</span>
            </div>
            </div>
        </header>
    )
}

export default Carshopbar;