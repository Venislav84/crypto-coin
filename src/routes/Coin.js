import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Style from "./Coin.module.css";
/* delete <a href> from desription for currency */
import DOMPurify from "dompurify";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  // I use param.coinId to take a different id (name) of everyone coin in url, for different data
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className={Style.coinContainer}>
        <div className={Style.content}>
          <h1>{coin.name}</h1>
        </div>
        <div className={Style.content}>
          <div className={Style.rank}>
            <span className={Style.rankBtn}>Rank # {coin.market_cap_rank}</span>
          </div>
          <div className={Style.info}>
            <div className={Style.coinHeading}>
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/ USD</p> : null}
            </div>
            <div className={Style.coinPrice}>
              {coin.market_data?.current_price ? (
                <h1>$ {coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className={Style.content}>
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%
                      </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={Style.content}>
          <div className={Style.stats}>
            <div className={Style.left}>
              <div className={Style.row}>
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p>$ {coin.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className={Style.row}>
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p>$ {coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
            <div className={Style.right}>
              <div className={Style.row}>
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>$ {coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className={Style.row}>
                <h4>Circulating Supply</h4>
                {coin.market_data?.circulating_supply ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className={Style.content}>
          <div className={Style.about}>
            <h3>About</h3>
            {/* delete <a href> from desription for currency */}
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
