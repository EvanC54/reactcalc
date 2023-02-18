import React from "react"
import './styles.css'
import Digitbutton from "./Digitbutton"
import { useReducer } from 'react'
import Operationbutton from "./Operationbutton"



export const ACTIONS ={
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}


function reducer(state, {type, payload}) {
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0"){
      return state}

      if (payload.digit === "." && state.currentOperand.includes(".")){
      return state}
      
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      }
      case ACTIONS.CHOOSE_OPERATION:
        if (state.currentOperand == null && state.previousOperand == null){
          return state
        }
        if (state.previousOperand == null){
          return{
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: null,
          }
        }
      case ACTIONS.CLEAR: 
      return{}
  }

}

function App() {
  const [{ currentOperand, previousOperand, operation}, dispatch] = useReducer(
    reducer,
    {}
    )

  return (
    <div className="calc-grid">
      <div className="output">
        <div className="previous-operand"> {previousOperand} {operation} </div>
        <div className="current-operand"> {currentOperand} </div>
      </div>
      <button 
      className="span-two" 
      onClick={() => dispatch({type: ACTIONS.CLEAR})}> AC </button>
      <button> DEL </button>
      <Operationbutton operation="÷" dispatch={dispatch}/> 
      <Digitbutton digit="1" dispatch={dispatch}/>
      <Digitbutton digit="2" dispatch={dispatch}/>
      <Digitbutton digit="3" dispatch={dispatch}/>
      <Operationbutton operation="*" dispatch={dispatch}/>
      <Digitbutton digit="4" dispatch={dispatch}/>
      <Digitbutton digit="5" dispatch={dispatch}/>
      <Digitbutton digit="6" dispatch={dispatch}/>
      <Operationbutton operation="+" dispatch={dispatch}/>
      <Digitbutton digit="7" dispatch={dispatch}/>
      <Digitbutton digit="8" dispatch={dispatch}/>
      <Digitbutton digit="9" dispatch={dispatch}/>
      <Operationbutton operation="-" dispatch={dispatch}/>
      <Digitbutton digit="." dispatch={dispatch}/>
      <Digitbutton digit="0" dispatch={dispatch}/>
      <Operationbutton operation="=" dispatch={dispatch}/>
    </div>

  );
}
export default App;
