import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchcoins, getCoins } from '../redux/coinSlice';
import '../style/coin.css';

function Coin() {
  const dispatch = useDispatch();
  const coins = useSelector(getCoins);
  useEffect(() => {
    dispatch(fetchcoins());
  }, [dispatch]);

  return (
    <div className="parent">
      <div className="column">
        {coins.filter((_, index) => index % 2 === 0).map((coin) => (
          <div key={coin.id} className="child">
            <Link to={`/coin/${coin.id}`}>
              <h2>{coin.name}</h2>
              <img src={coin.img} alt={coin.name} />
              <span>
                symbol :
                {' '}
                {coin.symbol}
              </span>
              <span>
                price :
                {' '}
                {coin.price}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="column">
        {coins.filter((_, index) => index % 2 !== 0).map((coin) => (
          <div key={coin.id} className="child">
            <Link to={`/coin/${coin.id}`}>
              <h2>{coin.name}</h2>
              <img src={coin.img} alt={coin.name} />
              <span>
                symbol :
                {' '}
                {coin.symbol}
              </span>
              <span>
                price :
                {' '}
                {coin.price}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coin;
