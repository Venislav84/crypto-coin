import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./components/Coins/Coins";
import Coin from "./routes/Coin";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import useLocalStorage from "use-local-storage";
import "./index.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [theme] = useLocalStorage("theme" ? "light" : "dark");

  // sometimes url is doesn't work, because there is a limits...You have to restart the page, or waiting for 5-10 minutes.
  //It is not problem in code, it is url.
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=77&page=1&sparkline=false&locale=en";

  function handleSearch(searchData) {
    const newData = allCoins.filter(
      (coin) =>
        coin.symbol.toLowerCase().includes(searchData) ||
        coin.name.toLowerCase().includes(searchData)
    );
    setCoins(newData);
    return "";
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setAllCoins(response.data);
        setCoins(response.data);
      })
      .catch((error) => {
        setCoins([]);
        setAllCoins([]);
      });
  }, []);

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Navbar />
        <ThemeToggle />
        <Routes>
          <Route
            path="/"
            element={
              <Coins
                coins={coins}
                allCoins={allCoins}
                sendSearch={handleSearch}
              />
            } // take a props from coins
          />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
