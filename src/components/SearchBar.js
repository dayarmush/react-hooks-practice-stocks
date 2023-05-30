import { useState } from "react";

function SearchBar({alphabetically, setAlphabetically, price, setPrice, setFilter}) {

  function handleChangeA(e) {
    if (e.target.value === "Alphabetically") {
      setAlphabetically(pre => !pre)
      setPrice(false)
    } else {
      setPrice(pre => !pre)
      setAlphabetically(false)
    }
  }

  function handleChangeB(e) {
    setFilter(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphabetically}
          onChange={handleChangeA}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={price}
          onChange={handleChangeA}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleChangeB}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
