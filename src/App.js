import './App.css';
import {useState} from 'react'

function App() {

  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const deleteProduto = () =>  setFruits(fruits.filter((fruits) => (fruits.color === 'red')))

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {fruits.map((item) => {return <li className="ahadois">{item.name}</li>})}
        </ul>
        <button onClick={deleteProduto}>Exibir frutas vermelhas</button>
      </header>
    </div>
  );
}

export default App;
