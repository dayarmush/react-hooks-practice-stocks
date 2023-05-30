import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(data => setStocks(data))
  }, [])

  if (!stocks) return <h3>Loading...</h3>

  function handlePurchase(id) {
    const filteredStock = stocks.find(stock => stock.id === id);
    if (filteredStock && !portfolio.some(stock => stock.id === id)) {
      setPortfolio(prevPortfolio => [...prevPortfolio, filteredStock]);
    }
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={handlePurchase} />
        </div>
        <div className="col-4">
          <PortfolioContainer  portfolio={portfolio} stocks={stocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
