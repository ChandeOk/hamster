import Balance from './Balance';
import Character from './Character';
import ProgressBar from './ProgressBar';
import StatCards from './StatCards';
import Consumable from './Consumable';
import { Stage } from '../App';
import './PlayArea.sass';

interface IPlayAreaProps {
  stage: Stage;
  sum: number;
  charge: number;
  maxCharge: number;
  setCharge: React.Dispatch<React.SetStateAction<number>>;
  setSum: React.Dispatch<React.SetStateAction<number>>;
}

function PlayArea({ stage, charge, setCharge, sum, setSum, maxCharge }: IPlayAreaProps) {
  const handleChanges = () => {
    setSum(prev => prev + 1);
    setCharge(charge => charge - 1);
    localStorage?.setItem('sum', sum + 1 + '');
  };

  let stageClass = 'play-area';

  if (stage === Stage.GAME)
    stageClass += ' stage-game';

  return (
    <div className={stageClass}>
      <StatCards/>
      <Balance sum={sum}/>
      {stage === Stage.GAME
        ? (
            <>
              <ProgressBar/>
              <Character handleChages={handleChanges}/>
              <Consumable charge={charge} maxCharge={maxCharge}/>
            </>
          )
        : null}
    </div>
  );
}

export default PlayArea;
