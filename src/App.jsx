import "./App.css";

function App() {
  let counter = 0;
  let increament = () => {
    document.querySelector(".counter").textContent = counter++;
  };
  let decrement = () => {
    if (counter === 0) {
      document.querySelector(".counter").textContent = counter;
    } else {
      document.querySelector(".counter").textContent = counter--;
    }
  };
  return (
    <div className="container">
      <h3 className="title">Counter App</h3>
      <span className="counter">{counter}</span>
      <button
        className="incr"
        onClick={() => {
          increament();
        }}
      >
        Increament
      </button>
      <button
        className="dcr"
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
