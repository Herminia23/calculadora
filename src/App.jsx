import './App.css';
import React, {useState} from "react"

function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  const deleteNumber = () => {
    if (currentOperation === "") {
      setNumber1(number1.toString().slice(0, -1));
    } else {
      setNumber2(number2.toString().slice(0, -1));
    }
  };

  function allclear() {
    setNumber1("");
    setNumber2("");
    setCurrentOperation("");
    setResult("");
  }
  function historial () {
    

  }
  
  function clickNumber (val) {
    if (currentOperation === ""){
      setNumber1(number1 + val);
    }else {
      setNumber2(number2 + val);
    }

  }

  function clickOperation (val) {
    setCurrentOperation(val);
  }

  function getResult (val) {
    switch (currentOperation) {
      case "+":
        setResult(Number(number1) + Number(number2));
        break; 
        case "-":
          setResult(Number(number1) - Number(number2));
          break; 
          case "*":
            setResult(Number(number1) * Number(number2));
            break; 
            case "/":
              setResult(Number(number1) / Number(number2));
              break; 


    }
  }

  return (
    <div className="App">
      <div className="calculadora-grid">
        <div className="output">
          <div className="previous-operand">{ currentOperation ? number1 + currentOperation: ""}</div>
          <div className="current-operand">{result ? result : (!currentOperation ? number1 : number2)}</div>

        </div>
        <button ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
        <button onClick={allclear} className="span-two">AC</button>
        <button onClick={deleteNumber}>DEL</button>
        <button onClick={() => {clickOperation("/")}}>/</button>
        
        <button onClick={() => {clickNumber(7)}}>7</button>
        <button onClick={() => {clickNumber(8)}}>8</button>
        <button onClick={() => {clickNumber(9)}}>9</button>
        <button onClick={() => {clickOperation("*")}}>*</button>
        <button onClick={() => {clickNumber(4)}}>4</button>
        <button onClick={() => {clickNumber(5)}}>5</button>
        <button onClick={() => {clickNumber(6)}}>6</button>
        <button onClick={() => {clickOperation("+")}}>+</button>
        <button onClick={() => {clickNumber(1)}}>1</button>
        <button onClick={() => {clickNumber(2)}}>2</button>
        <button onClick={() => {clickNumber(3)}}>3</button>
        <button onClick={() => {clickOperation("-")}}>-</button>
        <button onClick={() => {clickNumber(".")}}>.</button>
        <button onClick={() => {clickNumber(0)}}>0</button>
        <button onClick={getResult} className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;