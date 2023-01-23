import Search from "./searchComp";
import Add from "./addItemComp.js";
import Display from "./dispComp";
import { useState } from "react";

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
        <Display items={filterData(data["items"])} />
      </div>
    </div>
  );
}
export default App;