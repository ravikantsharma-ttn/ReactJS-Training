import Product from "./Product";
import React, { useState , useEffect } from 'react';

function Products(props) {

    const url = "https://fakestoreapi.com/products";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }

    useEffect(() => {
        fetchInfo();
    }, []);
    
    return(
        <>
            {data.map((dataObj,index)=>{
                return (
                    <Product handleAddCart = {props.handleCartAddCount} 
                    handleCartRemove={props.handleCartRemoveCount} 
                    id={dataObj.id} image={dataObj.image} 
                    title={dataObj.title} price={dataObj.price} 
                    key={dataObj.id}></Product>
                )
            })}
        </>
    )
}

export default Products