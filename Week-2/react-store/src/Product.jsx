import React, {useState} from 'react';

function Product(props){
    const [addRemoveToggle,setAddRemoveToggle] = useState(true);
    const handleOnClick = (e) =>{
        props.handleAddCart();
        setAddRemoveToggle(false);
        console.log(e.target);
    }
    const handleRemoveClick = () =>{
        props.handleCartRemove();
        setAddRemoveToggle(true);
        console.log(e.target);
    }

    return(
        <>
        <div className="product">
            <img src={props.image}></img>
            <p>{props.title}</p>
            <p>$ {props.price}</p> 
            {addRemoveToggle ? 
            <button id={props.id} onClick={handleOnClick}>Add to cart</button> : 
            <button id={props.id} onClick={handleRemoveClick}>Remove</button>} 
        </div>
        </>
    )
}

export default Product