import { getImageUrl } from '../util';
import './Balance.sass';

interface IBalanceProps {
  sum: number;
}

function Balance({ sum }: IBalanceProps) {
  return (
    <div className="balance">
      <img src={getImageUrl('dollar-big')} alt="dollar icon" />
      <p className="balance__sum">{Intl.NumberFormat('en-GB').format(sum)}</p>
    </div>
  );
}

export default Balance;
