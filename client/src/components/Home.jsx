import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../actions";
import { Button } from "reactstrap";
import CardAddress from "./CardAddress";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { account_balance_wallet, grid_view } from "material-icons";

export default function Home() {
  const dispatch = useDispatch();

  const addresses = useSelector((state) => state.addresses);

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAddresses());
  };

  const handleConvert = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <h1>
            <span className="material-icons"> grid_view </span>
            My Wallet
          </h1>

          <br />
          <Button onClick={(e) => handleClick(e)}>Refresh</Button>
          <br />
          <br />

          <SearchBar />

          <br />
          <br />

          <div className="col-md-12">
            <div id="tasksList">
              <div className="d-flex align-items-center">
                <span className="material-icons"> account_balance_wallet </span>
                <h3 className="ms-2">Wallet Addresses</h3>
              </div>
              <div className="card card-body bg-dark rounded-0 mb-8">
                {addresses?.map((address) => (
                  <div key={address.account}>
                    <br />
                    <CardAddress
                      account={address.account}
                      balance={address.balance}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
      <div className="row">
        <div className="col-ml-12">
        <h1>Currency Converter</h1>
        <br />
        Amount:{" "}
        <br />
        <input
          type="range"
          id="amount"
          min="0"
          max="1000"
          value="0"
          onChange={handleConvert}
        />
        <span id="amountText">0</span>
        <br />
        Convert from:
        <select id="from" onChange={handleConvert}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="ETH">ETH</option>
        </select>
        <br />
        <br />
        Convert to:
        <select id="to" onChange={handleConvert}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="ETH">ETH</option>
        </select>
        <br />
        <h2 id="result">{}</h2>
      </div>
      </div>
      </div>
    </div>
  );
}
