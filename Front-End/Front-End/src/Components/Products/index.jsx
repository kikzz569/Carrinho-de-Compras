import { useState, useEffect } from 'react'
import api from '../../Services/api'
import styles from './products.module.css'

function Products({ addCarShop, search }) {

    const [products, setProducts] = useState([])


    async function getProducts() {
        try {
            const productsFromApi = await api.get('/products');
            setProducts(productsFromApi.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const FilteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <section className={styles.items}>
                {FilteredProducts.map(product => (
                    <div key={product.id} className={styles.card_container}>
                        <article className={styles.card}>
                            <img src={`../public/img/${product.image}`} alt={product.name} />
                            <div className={styles.text_products}>
                                <p>{product.name}</p>
                                <span>{`R$${product.price}`}</span>
                            </div>
                            <button className={styles.addCar} onClick={() => addCarShop(product)}>Adicionar ao Carrinho</button>
                        </article>
                    </div>
                ))
                }
            </section>

        </>
    )
}

export default Products;