
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Event from './component/events'; 
import Remainder from './component/remainders';
import Task from './component/tasks'; 
import Status from './component/statusBar'; 
import './App.css';

function App() {
  return (
    <div className="div-container">
      <BrowserRouter>
        <Status />
        <Switch>
          <Route exact path="/" component={Event} /> 
          <Route exact path="/remainder" component={Remainder} /> 
          <Route exact path="/task" component={Task} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
