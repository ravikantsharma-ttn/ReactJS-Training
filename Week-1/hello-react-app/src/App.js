import React from 'react';
import './App.css';

const HelloWorld = () => {
  return (
    <h1>Hello World</h1>
  )
}

const AddName = () => {

  const handleClick = () =>{
    var name = document.getElementById("username").value;
    var li = document.createElement("li");
    li.textContent = name;
    document.getElementById("userList").appendChild(li);
  }

  return (
    <div>
      <input type='text' id="username"/>
      <button onClick={handleClick}>Add</button>
      <ol id="userList"></ol>
    </div>
  )
}

function App() {
  const names = [];

  return (
    <div>
      <HelloWorld />
      <AddName/>
    </div>
  );
}

export default App;
