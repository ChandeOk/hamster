import { getImageUrl } from '../util';
import './StatCards.sass';
interface IStatCardsProps {}

function StatCards({}: IStatCardsProps) {
  return (
    <div className="stat-cards">
      <div className="stat-card">
        <h3>Earn per tap</h3>
        <div className="stat-card__info">
          <img src={getImageUrl('dollar')} alt="dollar" />
          <p>+12</p>
        </div>
      </div>
      <div className="stat-card">
        <h3>Coins to level up</h3>
        <div className="stat-card__info">
          <p>10 M</p>
        </div>
      </div>
      <div className="stat-card">
        <h3>Profit per hour</h3>
        <div className="stat-card__info">
          <img src={getImageUrl('dollar')} alt="dollar" />
          <p>+636.31K</p>
          <img src={getImageUrl('info')} alt="info icon" />
        </div>
      </div>
    </div>
  );
}

export default StatCards;
