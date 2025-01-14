import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [alphabetically, setAlphabetically] = useState(false)
  const [price, setPrice] = useState(false)
  const [filter, setFilter] = useState('')

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
      <SearchBar 
        alphabetically={alphabetically}
        setAlphabetically={setAlphabetically} 
        price={price}
        setPrice={setPrice}
        setFilter={setFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            handleClick={handlePurchase}
            price={price}
            alphabetically={alphabetically}
            filter={filter}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
