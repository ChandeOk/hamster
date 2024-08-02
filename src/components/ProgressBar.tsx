import './ProgressBar.sass';

function ProgressBar() {
  return (
    <div className="progress-container">
      <div className="progress-info">
        <p className="progress-info__name">Epic</p>
        <p className="progress-info__level">
          <span>Level </span>
          6/10
        </p>
      </div>
      <div className="progress-bar"></div>
    </div>
  );
}

export default ProgressBar;
