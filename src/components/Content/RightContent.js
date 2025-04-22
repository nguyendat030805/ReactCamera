import React, { useEffect, useState } from "react";
import ShowCart from "../ShowCart";

const RightContent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products') 
            .then(response => response.json())
            .then(data => {
                const filteredData = data.map(item => ({
                    id: item.id,
                    name: item.name,
                    avatar: item.avatar
                }));
                setProducts(filteredData); // cập nhật state → React re-render
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div id="right-content">
                <h2>Product : </h2>
                <div id="products">
                    {products.map((product) => (
                        <ShowCart
                            key={product.id}
                            avatar={product.avatar}
                            name={product.name}
                        />
                    ))}
                    <div style={{ clear: 'both' }} />
                </div>
            </div>
        </div>
    );
};

export default RightContent;
