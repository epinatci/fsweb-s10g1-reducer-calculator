import React from 'react';
import { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers'
import { addMemoryRecall, addMemory, applyNumber, changeOperation, clearDisplay, addClearMemory } from './actions';




function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick =(number)=> {
    dispatch(applyNumber(number))
  }

  const handleOperationChange=(operator) =>{
    dispatch(changeOperation(operator))
  }

  const handleClearDisplay=() =>{
    dispatch(clearDisplay())
  }

  const handleAddMemoryClick=() =>{
    dispatch(addMemory())
  }

  const handleApplyMR=() =>{
    dispatch(addMemoryRecall())
  }

  const handleClearMemory=() =>{
    dispatch(addClearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddMemoryClick}/>
              <CalcButton value={"MR"} onClick={handleApplyMR}/>
              <CalcButton value={"MC"} onClick={handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>handleNumberClick(1)} />
              <CalcButton value={2} onClick={()=>handleNumberClick(2)} />
              <CalcButton value={3} onClick={()=>handleNumberClick(1)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>handleNumberClick(4)} />
              <CalcButton value={5} onClick={()=>handleNumberClick(5)} />
              <CalcButton value={6} onClick={()=>handleNumberClick(6)} />
            </div>

            <div className="row">
              <CalcButton value={7}onClick={()=>handleNumberClick(7)} />
              <CalcButton value={8}onClick={()=>handleNumberClick(8)} />
              <CalcButton value={9}onClick={()=>handleNumberClick(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>handleOperationChange("+")} />
              <CalcButton value={"*"} onClick={()=>handleOperationChange("*")} />
              <CalcButton value={"-"} onClick={()=>handleOperationChange("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
