import { useContext } from "react";
import { Expression, Theme } from "./calculator.component";
import "./sass/screen.styles.scss";

const Screen = () => {
  const { expression } = useContext(Expression);
  const { theme, setTheme } = useContext(Theme);
  return (
    <div className={`screen theme${theme}-screen-bg`}>
      <p className={`display-value theme${theme}-screen-font-color`}>
        {expression}
      </p>
    </div>
  );
};

export default Screen;
