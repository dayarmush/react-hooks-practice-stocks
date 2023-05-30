import React from "react";
import Stock from "./Stock";

function StockContainer({ price, alphabetically, stocks, handleClick, filter }) {

  let renderStocks;

  if (price && !alphabetically) {

    renderStocks = stocks
    .filter(stock => stock.type.includes(filter))
    .sort((a, b) => a.price - b.price)
    .map(stock => <Stock key={stock.id} stock={stock} handleClick={handleClick} />)

  } else if (alphabetically && !price) {

    renderStocks = stocks
    .filter(stock => stock.type.includes(filter))
    .sort((a, b) => a.name[0].localeCompare(b.name[0]))
    .map(stock => <Stock key={stock.id} stock={stock} handleClick={handleClick} />)

  } else {

    renderStocks = stocks.filter(stock => stock.type.includes(filter)).map(stock => <Stock key={stock.id} stock={stock} handleClick={handleClick} />)
    
  }

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
