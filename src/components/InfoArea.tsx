import { getImageUrl } from '../util';
import './InfoArea.sass';

interface IInfoAreaProps {

}

function InfoArea({}: IInfoAreaProps) {
  return (
    <div className="info-area">
      <h1>Hamster Combat</h1>
      <div className="icons-container">
        <div className="info-icon">
          <div className="icon-filter">
          </div>
          <img src={getImageUrl('econev')} alt="logo" />
          <p>econev </p>
        </div>
        <div className="info-icon">
          <div className="icon-filter icon-filter_active">
          </div>
          <img src={getImageUrl('binance')} alt="binance logo" />
          <p>Binance</p>
        </div>
      </div>
    </div>
  );
}

export default InfoArea;
