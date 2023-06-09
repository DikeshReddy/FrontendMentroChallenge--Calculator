import { useState } from "react";
import { createContext, useContext } from "react";
import Header from "./header.component";
import Screen from "./screen.component";
import Keypad from "./keypad.component";
import "./sass/calculator.styles.scss";

export const Expression = createContext("");

export const Theme = createContext(1);

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [theme, setTheme] = useState(1);
  document.body.style.setProperty(
    "background-color",
    `var(--theme${theme}-main-bg)`
  );

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <Expression.Provider value={{ expression, setExpression }}>
        <div className={`calculator`}>
          <Header />
          <Screen />
          <Keypad />
        </div>
      </Expression.Provider>
    </Theme.Provider>
  );
};

export default Calculator;
