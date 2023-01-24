import Search from "./searchComp";
import Add from "./addItemComp.js";
import Display from "./dispComp";
import { useEffect, useState } from "react";

/* Example for styled-components:
import styled from "styled-components"
const Title = styled.h1`
  color: ${props => props.color ? props.color: "black"};`
*/

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  useEffect(()=>{fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((data) => setData({ items: data}));}, [])    
  /*
  [] = componentDidMount(),
  if we pass in a variable it runs whenever the variable changes
  */ 
 const deleteItem = (item) =>{
  const items = data["items"];
  console.log("delete-initiated")
  const requestOptions = { method: "DELETE"}
  fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then((response) => {if(response.ok){
    const delId = items.indexOf(item);
    items.splice(delId,1);
    setData({items: items})
  }})
 }
  const filterData = (data) => {
    const filteredData = [];
    for (const item of data) {
      if (filters.name !== "" && filters.name !== item.name) {
        continue;
      }
      if (filters.price !== 0 && filters.price !== item.price) {
        continue;
      }
      if (filters.type !== "" && filters.type !== item.type) {
        continue;
      }
      if (filters.brand !== "" && filters.brand !== item.brand) {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };

  const dataAdded = (item) => {
    let items = data["items"];
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }
    fetch("http://localhost:3000/items", requestOptions)
    .then((response)=> response.json())
    .then((data) => {
      items.push(data);
      setData({ items: items })});
    
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <Search updateParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <Add updateParams={dataAdded} />
      </div>
      <div className="row mt-3">
        <Display deleteItem = {deleteItem} items={filterData(data["items"])} />
      </div>
    </div>
  );
}
export default App;