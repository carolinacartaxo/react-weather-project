import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="https://boisterous-naiad-a83020.netlify.app/">
            {" "}
            Carolina Cartaxo
          </a>{" "}
          and is
          <a
            href="https://github.com/carolinacartaxo/react-weather-project"
            target="_blank"
            rel="noreferrer">
            {" "}
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
