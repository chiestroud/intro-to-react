import './App.css';
import Home from '../src/views/Home';
import Counter from './Counter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const array = [
    {
      appName: "Counter 1",
      counterValue: 200
    },
    {
      appName: "Counter 6",
      counterValue: 0
    },
    {
      appName: "Counter 3",
      counterValue: 100
    },
    {
      appName: "Counter 4",
      counterValue: 150
    }
  ];

  // const countersOnDom = () => {
  //   array.map((counter, i) => <Counter key={i} appName={counter.appName} counterValue={counter.counterValue} />)
  // }
  // and return on the return statement also

  return (
    <Router>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/counters">Counters</Link></li>
      </ul>
      
      <Switch>
        <Route exact path="/counters">
          {
            array.map((counter, i) => <Counter key={i} appName={counter.appName} counterValue={counter.counterValue} />)
          }
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
