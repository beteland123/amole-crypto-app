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
    <div className="coins-cointainer">
      <h2 className="heading lato"> All crypto coins</h2>
      <div className="parent" data-testid="coin-component">
        <div className="column">
          {coins.filter((_, index) => index % 2 === 0).map((coin, index) => (
            <div key={coin.id} className={`child ${index % 2 === 0 ? 'even' : 'odd'} ${index % 2 === 0 ? 'column-even' : 'column-odd'}`}>
              <Link to={`/coin/${coin.id}`}>
                <div className="first-row">
                  <img src={coin.img} alt={coin.name} />
                  <span className="sans symbol">
                    {coin.symbol}
                  </span>
                  <span className="sans price">
                    $
                    {coin.price}
                  </span>
                </div>
                <div className="span">
                  <h4 className="sans">{coin.name}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="column">
          {coins.filter((_, index) => index % 2 !== 0).map((coin, index) => (
            <div key={coin.id} className={`child ${index % 2 === 0 ? 'odd' : 'even'} ${index % 2 === 0 ? 'column-odd' : 'column-even'}`}>
              <Link to={`/coin/${coin.id}`}>
                <div className="first-row">
                  <img src={coin.img} alt={coin.name} />
                  <span className="sans symbol">
                    {coin.symbol}
                  </span>
                  <span className="sans price">
                    $
                    {coin.price}
                  </span>
                </div>
                <div className="span">
                  <h4 className="sans">{coin.name}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Coin;
