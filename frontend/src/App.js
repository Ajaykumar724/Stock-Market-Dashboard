import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyList from "./CompanyList";
import StockChart from "./StockChart";
import "./index.css";
import HoldingsChart from "./HoldingsChart";
import PositionsChart from "./PositionsChart";


function App() {
  const [companies, setCompanies] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [chartView, setChartView] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/data").then(res => {
      setCompanies(res.data);
    });
  }, []);

  const fetchStockData = (ticker) => {
    axios.get(`http://localhost:3002/history/${ticker}`).then(res => {
      setStockData(res.data);
      setSelected(ticker);
    });
  };

  return (
    <div className="container ms-0">
      <div className="sidebar">
        <CompanyList companies={companies} onSelect={fetchStockData} />
      </div>
      <div className="main">
        <div className="d-flex justify-content-end align-items-center mb-3 fixed-top">
          <button className="btn btn-primary m-2" onClick={() => chartView=== "" ? setChartView("holdings") : setChartView("")}>Holdings</button>
          <button className="btn btn-primary m-2" onClick={() => chartView=== "" ? setChartView("positions") : setChartView("")}>Positons</button>
        </div>
        {stockData.length > 0 ? (
          <StockChart data={stockData} ticker={selected} />
        ) : (
          <h3>Select a company to view stock chart</h3>
        )}
          {/* Extra chart based on button click */}
          {chartView === "holdings" && <HoldingsChart data={companies.holdings || []} />}
          {chartView === "positions" && <PositionsChart data={companies.positions || []} />}
      </div>
    </div>
  );
}

export default App;
