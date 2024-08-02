import { getImageUrl } from '../util';
import './Character.sass';

interface ICharacterProps {
  handleChages: () => void;
}

function Character({ handleChages }: ICharacterProps) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.currentTarget;
    const keyframes = [{
      transfrom: 'rotate3d(0, 0, 0, 0deg)',
      transform: 'rotate3d(2, -1, 0, 11deg)',
    }];
    target.animate(keyframes, { duration: 100, iterations: 1 });
    handleChages();
  };
  return (
    <div className="character-container" onClick={handleClick}>
      <img src={getImageUrl('character')} alt="character image" />
    </div>
  );
}

export default Character;
