import { useState } from "react";

function Add(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const onClick = () => {
    props.updateParams({ name: name, price: price, type: type, brand: brand });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Add an Item:</h2>
      </div>
     
        <div className="col">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <label htmlFor="price">Price: </label>
          <input
            id="price"
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>

          <label htmlFor="type">Type: </label>
          <input
            id="type"
            type="text"
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></input>

          <label htmlFor="brand">Brand: </label>
          <input
            id="brand"
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></input>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button type="button" className="btn btn-primary" onClick={onClick}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
