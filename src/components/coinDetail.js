import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCoins } from '../redux/coinSlice';

function CoinDetail() {
  const coins = useSelector(getCoins);
  const { id } = useParams();
  const detailCoin = coins.find((coin) => coin.id === id);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={detailCoin.img} alt={detailCoin.name} />
            </td>
          </tr>
          <tr>
            <td>
              <span>Name:</span>
              <span>{detailCoin.name}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Symbol:</span>
              <span>{detailCoin.symbol}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Price:</span>
              <span>{detailCoin.price}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Volume:</span>
              <span>{detailCoin.volume}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Market Cap:</span>
              <span>{detailCoin.marketCap}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Available Supply:</span>
              <span>{detailCoin.availableSupply}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total Supply:</span>
              <span>{detailCoin.totalSupply}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Price Change (1h):</span>
              <span>{detailCoin.priceChange1h}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Price Change (1d):</span>
              <span>{detailCoin.priceChange1d}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Price Change (1w):</span>
              <span>{detailCoin.priceChange1w}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Website URL:</span>
              <span>{detailCoin.websiteUrl}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CoinDetail;
