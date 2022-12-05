import "../styles/Header.scss";

interface INaviButton {
  text: string;
}

const NavigateButton = (props: INaviButton) => {
  const { text } = props;
  return (
    <div className="nav-button">
      <div className="text">{text}</div>
      <div className="temp">
        <div className="line" />
      </div>
    </div>
  );
};

export default NavigateButton;
