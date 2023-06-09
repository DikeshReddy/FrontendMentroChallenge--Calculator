import { useContext } from "react";
import { Expression } from "./calculator.component";
import "./sass/keypadButton.styles.scss";

const KeypadButton = (props) => {
  const { expression, setExpression } = useContext(Expression);

  const calculate = (expression) => {
    let value = 0;
    let a = "";
    let b = "";
    let op = "";

    for (let i = 0; i <= expression.length; i++) {
      const currentChar = expression.charAt(i);
      if (!isNaN(parseFloat(currentChar)) || currentChar === ".") {
        if (op === "") {
          a += currentChar;
        } else {
          b += currentChar;
        }
      } else if (["+", "-", "×", "/"].includes(currentChar)) {
        if (op !== "") {
          value = performOperation(parseFloat(a), parseFloat(b), op);
          a = String(value);
          b = "";
        }
        op = currentChar;
      }
    }

    if (op === "") {
      value = a;
    } else {
      value = performOperation(parseFloat(a), parseFloat(b), op);
    }

    return String(value);
  };

  const performOperation = (a, b, op) => {
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "×") {
      return a * b;
    } else if (op === "/") {
      return a / b;
    }
    return 0;
  };

  const clickHandler = () => {
    if (props.value == "DEL") {
      setExpression(expression.slice(0, -1));
    } else if (props.value == "RESET") {
      setExpression("");
    } else if (props.value == "=") {
      setExpression(calculate(expression));
    } else {
      setExpression(expression + props.value);
    }
  };

  return (
    <button
      className={`${props.className} keypad-button`}
      value={props.value}
      onClick={clickHandler}
    >
      {props.value}
    </button>
  );
};

export default KeypadButton;
