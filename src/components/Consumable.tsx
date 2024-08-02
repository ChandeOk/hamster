import { getImageUrl } from '../util';

import './Consumable.sass';

interface IConsumableProps {
  charge: number;
  maxCharge: number;
}

function Consumable({ charge, maxCharge }: IConsumableProps) {
  return (
    <div className="consumable">
      <div className="consumable__charge">
        <img src={getImageUrl('charge')} alt="charge icon" />
        {`${charge}/${maxCharge}`}
      </div>
      <p>Boost</p>
    </div>
  );
}

export default Consumable;
