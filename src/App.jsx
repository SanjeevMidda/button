import "./index.css";
import Button from "./components/Button";

function App() {
  let numberOfButtons = [];

  for (let index = 0; index < 130; index++) {
    numberOfButtons.push(index);
  }

  let colors = [
    "blue",
    "red",
    "green",
    "yellow",
    "silver",
    "orange",
    "pink",
    "brown",
    "purple",
    "black",
    "white",
  ];

  let numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40,
  ];

  return (
    <div className="App">
      <div className="mainContainer">
        <h1>buttons.</h1>
        <div className="buttonContainer">
          {numberOfButtons.map((element, index) => {
            return (
              <Button
                key={index}
                number={Math.floor(Math.random() * numbers.length)}
                colors={[
                  colors[Math.floor(Math.random() * colors.length)],
                  colors[Math.floor(Math.random() * colors.length)],
                ]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
