import './MenuButton.sass';

interface IMenuButtonProps {
  imageUrl: string;
  text: string;
  isActive?: boolean;
  setStage?: () => void;
}

function MenuButton({ imageUrl, text, isActive, setStage }: IMenuButtonProps) {
  return (
    <div className={isActive ? 'menu-button active' : 'menu-button'} onClick={setStage}>
      <img src={imageUrl} alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default MenuButton;
