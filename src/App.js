import './App.css';
import Counter from './Counter'

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
    <>
      {
        array.map((counter, i) => <Counter key={i} appName={counter.appName} counterValue={counter.counterValue} />)
      }
    </>
  )
}

export default App;
