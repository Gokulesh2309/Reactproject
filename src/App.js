import React, {useState} from 'react';
import Form from '../src/components/form.component';
import SData from '../src/components/SData.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App(){
  const [toggleState, setToggleState]=useState(1);

  const toggleTab=(index)=>{
    setToggleState(index);
  }

  return(
    <div className="container">
      <div className="bloc-tabs">
        <button id="button1" className={toggleState === 1 ? "tabs active-tabs" : "tabs" } onClick={()=>toggleTab(1)}>AppData</button>
        <button id="button2" className={toggleState === 2  ? "tabs active-tabs" : "tabs" } onClick={()=>toggleTab(2)}>ShowData</button>
      </div>
      <div className="content-tabs">
        <div className={ toggleState === 1 ? "content active-content" : "content"}>
          <Form/>
        </div>
        <div className={ toggleState === 2 ? "content active-content" : "content"}>
          <SData/>
        </div>

      </div>
    </div>
  )
}

export default App;