import React from "react";
import Style from "./CoinItem.module.css";
const CoinItem = (props) => {
  return (
    <div className={Style.coinRow}>
      <p>{props.coins.market_cap_rank}</p>
      <div className={Style.imgSymbol}>
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      {/* toLocaleString() chooses the decimal separator depending on the location in my case is usd */}
      <p>$ {props.coins.current_price.toLocaleString()}</p>
      <p
        style={{
          color:
            props.coins.price_change_percentage_24h > 0 ? "#20b820" : "red",
        }}
      >
        {props.coins.price_change_percentage_24h > 0 && "+"}
        {props.coins.price_change_percentage_24h.toFixed(2)} %
      </p>
      <p className={Style.hideMobile}>
        {props.coins.total_volume.toLocaleString()} M
      </p>
      <p className={Style.hideMobile}>
        {props.coins.market_cap.toLocaleString()} M
      </p>
    </div>
  );
};

export default CoinItem;
