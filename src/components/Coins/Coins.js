import React from "react";
import CoinItem from "../CoinItem/CoinItem";
import Coin from "../../routes/Coin";
import Style from "./Coins.module.css";
import { Link } from "react-router-dom";
import SearchField from "../SearchField/SearchField";

const Coins = (props) => {
  function handleSearch(searchData) {
    return props.sendSearch(searchData);
  }
  let showErrorMessage = props.error;
  return (
    <div>
      <SearchField sendData={handleSearch} />
      {props.coins.length == 0 ? (
        <div className={Style.textError}>
          The data can not be loaded, why API have a limit. Please refresh the
          site.
        </div>
      ) : (
        <div className={Style.container}>
          <div>
            <div className={Style.heading}>
              <p>#</p>
              <p className={Style.coinName}>Coin</p>
              <p>Price</p>
              <p>24h</p>
              <p className={Style.hideMobile}>Volume</p>
              <p className={Style.hideMobile}>Market Cap</p>
            </div>

            {props.coins.map((coins) => {
              // without coins.id throw exeption : Warning: Each child in a list should have a unique "key" prop
              return (
                // link to coin route to display info for coin
                <Link
                  to={`/coin/${coins.id}`}
                  element={<Coin />}
                  key={coins.id}
                >
                  <CoinItem coins={coins} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Coins;
