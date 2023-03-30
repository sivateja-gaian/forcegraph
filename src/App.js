//import logo from './logo.svg';
import './App.css';
import Sample from './sample';
function App() {
  return (
    <div className="App">
      <div id="head"><h1>SIMPLE FORCEGRAPH USING D3.JS</h1></div>
     <Sample/>
     <div id='content'>
        <h1>key features we implemented</h1>
        <ul>
          
          <li><b>Using force simulation  made the center of gravity for forcegraph</b></li>
          <li><b>we made the graph dragable.</b></li>
          <li><b>we used react as the components rerender only when the changes are made and it's more responsive .It updates the changes fastly.</b></li>
          <li><b>zooming features</b></li>
          <li><b>links between nodes</b></li>
        </ul>
     </div>
    </div>
  );
}

export default App;
