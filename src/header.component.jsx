import { Theme } from "./calculator.component";
import "./sass/header.styles.scss";
import { useContext } from "react";

const Header = () => {
  const { theme, setTheme } = useContext(Theme);

  const switchHandler = () => {
    if (theme === 3) {
      setTheme(1);
    } else {
      setTheme(theme + 1);
    }
  };
  return (
    <div className={`header theme${theme}-header-font-color`}>
      <h1 className="calc">calc</h1>
      <div className="theme">
        <p>THEME</p>
        <div
          className={`theme-switch theme${theme}-toggle-bg`}
          onClick={switchHandler}
        >
          <p className="theme-no one">1</p>
          <p className="theme-no two">2</p>
          <p className="theme-no three">3</p>
          <div
            className={`circle move-${theme} theme${theme}-circle-color`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
