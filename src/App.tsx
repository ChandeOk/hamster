import { useEffect, useState } from 'react';
import './App.sass';
import BottomMenu from './components/BottomMenu';
import PlayArea from './components/PlayArea';
import InfoArea from './components/InfoArea';
import MineArea from './components/MineArea';

export const enum Stage {
  GAME,
  MINE,
}

function App() {
  const [stage, setStage] = useState(Stage.GAME);
  const maxCharge = 6000;
  const [sum, setSum] = useState(507981);
  const [charge, setCharge] = useState(maxCharge);
  useEffect(() => {
    const sum = localStorage?.getItem('sum');
    if (!sum)
      return;

    setSum(+sum);
  }, []);

  return (
    <div className="app">
      {stage === Stage.GAME
        ? (
            <>
              <InfoArea/>
              <PlayArea stage={stage} charge={charge} setCharge={setCharge} setSum={setSum} sum={sum} maxCharge={maxCharge}/>
            </>
          )
        : null}
      {stage === Stage.MINE ? <MineArea sum={sum}/> : null}
      <BottomMenu setStage={setStage} stage={stage}/>
    </div>
  );
}

export default App;
