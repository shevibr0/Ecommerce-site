import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Products from "./components/products/products";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredCetegory, setFilteredCategory] = useState(products);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      return res.json()
    })
      .then((list)=>{
        setProducts(list)
        setFilteredCategory(list)
      
    })
  },[])
  const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
  const filterList=(option)=>{
    setFilteredCategory(products.filter((item=>item.category===option)))
  }
  return (
    <div className="App">
      <Header list={categories} onFilter={filterList}/>
      <Products list={filterList} />
    </div>
  );
}

export default App;
