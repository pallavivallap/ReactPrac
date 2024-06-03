import React, {useState} from 'react';
import './App.css'
import Numbers from './Numbers';


const App = () => {

    const [input, setInput] = useState('')

    function enterInput(value) {

      if (value === "AC") {
        setInput(" ");
      }

      else if (value === "C") {
        if (input) {
          let numStr = input.toString();
        let numSplit = numStr.split("");
        numSplit.pop();
        let poppedNum = numSplit.join("");
        let parseInput = parseInt(poppedNum);
        setInput(parseInput);
        }
        else {
          setInput("");
        }
        
    }

      // 30% of 200 = 30/100 * 200 
      //50% = 50/100 = 0.5
      // input/100 
      else if (value === "%") {
          setInput(input/100);
      }

      else if (value === "+") {
        setInput(input + "+");
      }

      else if (value === "-") { 
        setInput(input + "-");
    } 

      else if (value === "*") { 
        setInput(input + "*");
    } 
      
      else if (value === "/") { 
        setInput(input + "/");
    }

      else if (value === "=") {
        try {
            const result = eval(input);
            setInput(result);
        } catch (error) {
            setInput("Error");
        }
      }

     else{
      setInput(input + value)
     } 
    }

    return (
      <div className="calculator">
        <input type="text" value ={input} className="output" disabled/>
        <Numbers onInput={enterInput}/>
      </div>
    )
};

export default App;