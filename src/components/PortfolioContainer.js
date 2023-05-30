import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, setPortfolio }) {

  function handlePortDelete(id) {
    setPortfolio(pre => pre.filter(port => port.id !== id))
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(port => <Stock key={port.id} stock={port} handleClick={handlePortDelete}/>)}
    </div>
  );
}

export default PortfolioContainer;
