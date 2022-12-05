import "../styles/Header.scss";
import { ReactComponent as Icon } from "../assets/images/icon.svg";
import { ReactComponent as HamburgerIcon } from "../assets/images/hamburger.svg";

import NavigateButton from "./NavigateButton";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="left-icon">
        <Icon width="36px" height="36px"></Icon>
      </div>
      <div className="right-panel">
        <div className="nav-buttons">
          <NavigateButton text="文艺" />
          <NavigateButton text="程序" />
          <NavigateButton text="设计" />
          <NavigateButton text="About" />
          <div className="hamburger">
            <HamburgerIcon width="36px" height="36px" stroke="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
