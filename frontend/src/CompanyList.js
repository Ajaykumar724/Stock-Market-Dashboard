import React from "react";

function CompanyList({ companies, onSelect }) {
  const watchlist = companies.watchlist || [];
  return (
    <ul className="list-unstyled m-0 p-0">
      <div className="navbar bg-primary text-white shadow-sm fixed-top py-2 sidebar">
        <h3 className="text-center w-100 m-0">Companies</h3>
      </div>

      {watchlist.map((stock, index) => (
        <li
          key={index}
          className="d-flex justify-content-between align-items-center stock-item"
          onClick = {() => onSelect(stock.name || stock.ticker)}
        >
          <span className="stock-name">{stock.name}</span>
          <span className="stock-price">₹{stock.price.toFixed(2)}</span>
          <span
            className="stock-percent"
            style={{ color: stock.isDown ? "red" : "green" }}
          >
            {stock.percent}{" "}
            {stock.isDown ? (
              <i className="fa-sharp fa-solid fa-caret-down" style={{ color: "#e82626" }}></i>
            ) : (
              <i className="fa-sharp fa-solid fa-caret-up" style={{ color: "#63E6BE" }}></i>
            )}
          </span>
        </li>
      ))}
    </ul>

  );
}

export default CompanyList;
