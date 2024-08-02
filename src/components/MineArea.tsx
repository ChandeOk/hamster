import { getImageUrl } from '../util';
import Balance from './Balance';
import ListCard from './ListCard';
import './MineArea.sass';
import StatCards from './StatCards';

interface IMineAreaProps {
  sum: number;
}

const data = [
  {
    header: 'Тоp 10 cmc pairs',
    profit: 1.61,
    level: 13,
    sum: 156.92,
  },
  {
    header: 'Mene coins',
    profit: 2.2,
    level: 13,
    sum: 312.2,
  },
  {
    header: 'Margin trading x10',
    profit: 5.5,
    level: 13,
    sum: 313.92,
  },
  {
    header: 'Margin trading x20',
    profit: 5.5,
    level: 13,
    sum: 313.92,
  },
  {
    header: 'Margin trading x30',
    profit: 5.5,
    level: 13,
    sum: 313.92,
  },
  {
    header: 'Margin trading x50',
    level: 13,
    profit: 5.5,
    sum: 313.92,
  },
];

function MineArea({ sum }: IMineAreaProps) {
  return (
    <div className="mine-area">
      <StatCards/>
      <Balance sum={sum}/>
      <div className="daily-combo">
        <p>Daily Combo</p>
        <div className="daily-combo__stats">
          <img src={getImageUrl('dollar')} alt="dollar" />
          +5,000,000
          <img src={getImageUrl('ok')} alt="ok" />
        </div>
      </div>
      <div className="second-block">
        <div className="second-block__card">
          <img src={getImageUrl('japan')} alt="japan" />
          <p>License Japan</p>
        </div>
        <div className="second-block__card">
          <img src={getImageUrl('qa')} alt="qa" />
          <p>QA team</p>
        </div>
        <div className="second-block__card">
          <img src={getImageUrl('meme')} alt="meme" />
          <p>Meme coins</p>
        </div>
      </div>
      <div className="third-block">
        <p className="active">Markets</p>
        <p>PR&Team</p>
        <p>Legal</p>
        <p>Specials</p>
      </div>
      <div className="list-block">
        {data.map((item, i) => <ListCard header={item.header} image={i + 1 + ''} level={item.level} profit={item.profit} sum={item.sum} key={i}/>)}
      </div>
    </div>
  );
}

export default MineArea;
