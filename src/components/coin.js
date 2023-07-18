import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchcoins, getCoins,
} from '../redux/coinSlice';
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
            <h2>{coin.name}</h2>
            <img src={coin.img} alt={coin.name} />
          </div>
        ))}
      </div>
      <div className="column">
        {coins.filter((_, index) => index % 2 !== 0).map((coin) => (
          <div key={coin.id} className="child">
            <h2>{coin.name}</h2>
            <img src={coin.img} alt={coin.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Coin;
