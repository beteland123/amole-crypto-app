import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCoins } from '../redux/coinSlice';
import '../style/coindetail.css';

function CoinDetail() {
  const coins = useSelector(getCoins);
  const { id } = useParams();
  const detailCoin = coins.find((coin) => coin.id === id);

  return (
    <div data-testid="coin-detail-component">
      <table>
        <tbody>
          <tr>
            <td className="tdimg">
              <img src={detailCoin.img} alt={detailCoin.name} />
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Name:</span>
              <span>{detailCoin.name}</span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Symbol:</span>
              <span>{detailCoin.symbol}</span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Price:</span>
              <span>
                $
                {detailCoin.price}
              </span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Volume:</span>
              <span>
                $
                {detailCoin.volume}
              </span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Market Cap:</span>
              <span>
                $
                {detailCoin.marketCap}
              </span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Available Supply:</span>
              <span>
                $
                {detailCoin.availableSupply}
              </span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Total Supply:</span>
              <span>
                $
                {detailCoin.totalSupply}
              </span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Price Change (1h):</span>
              <span>
                $
                {detailCoin.priceChange1h}
              </span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Price Change (1d):</span>
              <span>
                $
                {detailCoin.priceChange1d}
              </span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>Price Change (1w):</span>
              <span>
                $
                {detailCoin.priceChange1w}
              </span>
            </td>
          </tr>
          <tr className="rows">
            <td className="lists">
              <span>URL:</span>
              <span>{detailCoin.websiteUrl}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CoinDetail;
