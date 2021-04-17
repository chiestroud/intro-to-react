import './App.css';
import Counter from './Counter'

function App() {
  return (
    <>
      <Counter appName="Counter 1" number={200}/>
      <Counter appName="Counter 2" number={200}/>
      <Counter appName="Counter 3" number={200}/>
    </>
  )
}

export default App;
