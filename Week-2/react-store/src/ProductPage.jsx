import Products from "./Products";
import React , {useState} from 'react';

function ProductPage(props) {

    const [count,updateCount] = useState(0);
    const handleCartAdd = () => {
        console.log("Product Added to cart==")
        let updatedCount= count +1;
        updateCount(updatedCount);
    }
    const handleCartRemove = () => {
        console.log("Product Removed to cart==")
        if(count>0){
        let updatedCount= count -1;
        updateCount(updatedCount);
        }
    }
    return (
        <>
            <header>
                <div className="storeHeader">
                    <div className="storeName">
                        <p>React Store</p>
                    </div>
                    <div className="cart">
                        <p>Cart Items : {count} </p>
                    </div>
                </div>
            </header>
            <Products handleCartAddCount = {handleCartAdd} handleCartRemoveCount = {handleCartRemove}></Products>
        </>
    )
}

export default ProductPage