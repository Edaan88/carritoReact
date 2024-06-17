import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

import"./Products.css"
const Products = () => {
    const { data, cart, setCart} = useContext(DataContext);

    if (!data || data.length === 0) {
        return <p>No hay productos disponibles</p>;
    }

    const buyProducts = (product) =>{
        setCart([...cart, product])


    }

    return (
        <div className="products-container">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                    <h4>{product.price}$</h4>
                    <button onClick={() => buyProducts (product)}>comprar</button>
                </div>
            ))}
        </div>
    );
}

export default Products;