import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio }) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(port => <Stock key={port.id} stock={port} />)}
    </div>
  );
}

export default PortfolioContainer;
