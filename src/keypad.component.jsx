import "./sass/keypad.styles.scss";
import KeypadButton from "./keypadButton.component";
import { useContext } from "react";
import { Theme } from "./calculator.component";

const Keypad = () => {
  const { theme, setTheme } = useContext(Theme);
  return (
    <div className={`keypad theme${theme}`}>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="7"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="8"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="9"
      ></KeypadButton>
      <KeypadButton
        className={`function-key theme${theme}`}
        value="DEL"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="4"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="5"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="6"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="+"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="1"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="2"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="3"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="-"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="."
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="0"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="/"
      ></KeypadButton>
      <KeypadButton
        className={`normal-key theme${theme}`}
        value="×"
      ></KeypadButton>
      <KeypadButton
        className={`reset function-key theme${theme}`}
        value="RESET"
      ></KeypadButton>
      <KeypadButton
        className={`equal-to function-key theme${theme}`}
        value="="
      ></KeypadButton>
    </div>
  );
};

export default Keypad;
