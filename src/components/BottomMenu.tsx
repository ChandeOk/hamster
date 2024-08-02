import { Stage } from '../App';
import { getImageUrl } from '../util';
import './BottomMenu.sass';
import MenuButton from './MenuButton';

interface IBottomMenuProps {
  stage: Stage;
  setStage: React.Dispatch<React.SetStateAction<Stage>>;
}

function BottomMenu({ setStage, stage }: IBottomMenuProps) {
  return (
    <div className="bottom-menu">
      <MenuButton imageUrl={getImageUrl('binance')} text="Exchange" isActive={stage === Stage.GAME} setStage={() => setStage(Stage.GAME)}/>
      <MenuButton imageUrl={getImageUrl('mine')} text="Mine" isActive={stage === Stage.MINE} setStage={() => setStage(Stage.MINE)}/>
      <MenuButton imageUrl={getImageUrl('friends')} text="Friends"/>
      <MenuButton imageUrl={getImageUrl('earn')} text="Earn"/>
      <MenuButton imageUrl={getImageUrl('airdrop')} text="Airdrop"/>
    </div>
  );
}

export default BottomMenu;
