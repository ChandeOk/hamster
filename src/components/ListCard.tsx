import { getImageUrl } from '../util';

import './ListCards.sass';

interface IListCardProps {
  image: string;
  header: string;
  profit: number;
  level: number;
  sum: number;
}

function ListCard({ image, header, profit, level, sum }: IListCardProps) {
  return (
    <div className="list-card">
      <div className="list-card__top">
        <img src={getImageUrl(image)} alt="" />
        <div>
          <h3>{header}</h3>
          <p>Profit per hour</p>
          <div>
            <img src={getImageUrl('dollar')} alt="" />
            <p>
              {profit}
              K
            </p>
          </div>
        </div>
      </div>
      <div className="list-card__bottom">
        <p className="list-card__bottom-level">
          {`lvl ${level}`}
        </p>
        <span className="list-card__bottom-line"></span>
        <img src={getImageUrl('dollar')} alt="" />
        <p className="list-card__bottom-sum">
          {sum}
          K
        </p>
      </div>
    </div>
  );
}

export default ListCard;
