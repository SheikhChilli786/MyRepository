import { useState } from "react";
import "./app.css"
function App() {
  let [value,setValue] = useState("");
  const calc = [];
  
  
  
  const display = (val) =>{
    let isOperator = checkValue(val);
    let isLastOperator = checkValue(value.slice(-1));
    if(isOperator && isLastOperator){
       setValue(value.slice(0,-1));
       return setValue(value);
    }
    value+=val;
    setValue(value);
    console.log(isOperator,isLastOperator,value.slice(-2,-1),val,value);
    
  }

  
  const clear = () => {
    setValue("");
  }
 
 
  const remove = () =>{
    setValue(value.slice(0,-1));
    console.log(value);
  }


  const checkValue = (val) =>{
    if(val === '*' || val === '/' || val === '+' || val === '-'){
      return true;
    }
    return false;
  }
  
  
  const sorting =()=>{
    const array = value.split('');
    console.log(array);
    let lol=0;
    let  len = array.length;
    array.map((val,i)=>{
      if(checkValue(val)){
         calc.push(lol,val);
         return lol = 0;
      }
      
      val=parseInt(val);
      lol = lol*10 + val;
      if(i+1 == len){
        calc.push(lol);
        return lol = 0;
      }
      console.log(i,lol,val,calc,len);
    })
  }
  const calculations = () =>{
    console.log(sorting());
    calc.map((calc_val,i)=>{
      if (calc_val==='/'){
        return calc.splice(i-1,3,calc[i-1]/calc[i+1]);
      }
    });
    calc.map((calc_val,i)=>{
      if (calc_val==='*'){
        return calc.splice(i-1,3,calc[i-1]*calc[i+1]);
      }
    });
    calc.map((calc_val,i)=>{
      if (calc_val==='-'){
        return calc.splice(i-1,3,calc[i-1]-calc[i+1]);
      }
    });
    calc.map((calc_val,i)=>{
      if (calc_val==='+'){
        return calc.splice(i-1,3,calc[i-1]+calc[i+1]);
      }
    });
    setValue(calc)
  }
  return (
    <div className="Calculator">
    <form onSubmit={(e)=>{calculations();e.preventDefault();}}>
       <input className="Screen" onChange={(e)=>setValue(e.target.value)} value={value}></input>
    </form>
      <div className="row">
        <button className="clearscrean" onClick={()=>clear()}>C</button>
        <button className="percentage" onClick={()=>display("%")}>%</button>
        <button className="delete" onClick={()=>remove()}>&#8592;</button>
        <button className="division" onClick={()=>display("/")}>&#247;</button>
      </div>
      <div className="row">
        <button className="seven" onClick={()=>display(7)}>7</button>
        <button className="eight" onClick={()=>display(8)}>8</button>
        <button className="nine" onClick={()=>display(9)}>9</button>
        <button className="multiply" onClick={()=>display("*")}>&#215;</button>
      </div>
      <div className="row">
        <button className="one" onClick={()=>display(6)}>6</button>
        <button className="second" onClick={()=>display(5)}>5</button>
        <button className="third" onClick={()=>display(4)}>4</button>
        <button className="plus" onClick={()=>display("-")}>-</button>
      </div>
      <div className="row">
        <button className="one" onClick={()=>display(1)}>1</button>
        <button className="second" onClick={()=>display(2)}>2</button>
        <button className="third" onClick={()=>display(3)}>3</button>
        <button className="plus" onClick={()=>display("+")}>+</button>
      </div>
      <div className="row">
        <button className="doubleZero">00</button>
        <button className="singleZero" onClick={()=>display(0)}>0</button>
        <button className="dot" >.</button>
        <button className="equal" onClick={()=>calculations()}>=</button>
      </div>
    </div>
  );
}

export default App;
