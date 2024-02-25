import React,{useState} from "react";

const ItemForm = ({addItem}) =>{

  const [itemName,setItemName] = useState('');
  const [price,setPrice] = useState('');
  const [description,setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({itemName,price,description});
    setItemName('');
    setPrice('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  );
} ;

const ItemList = ({items,removeItem}) =>{
   return(
     <div>
      {items.map((item,index)=>(
        <div key={index} style={{border:'1px solid black'}}>
         <h3>{item.itemName}</h3>
         <p>Price: {item.price}</p>
         <p>Description: {item.description}</p>
         <button onClick={()=> removeItem(index)}>Delete</button>
         </div> 
      ))}
     </div>
   )
}


const App = () =>{
  const [items,setItems] = useState([]);
  
  const addItem = (item) =>{
    setItems([...items,item]);
  };

  const removeItem = (index) =>{
    const updatedItems = [...items];
    updatedItems.splice(index,1);
    setItems(updatedItems);
  }

  return(
    <div>
      <h1>Item List</h1>
      <ItemForm addItem={addItem}/>
      <br/>
      <ItemList items = {items} removeItem= {removeItem}/>
    </div>
  )
}

export default App;