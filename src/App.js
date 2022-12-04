import "./styles.css";
import WeatherApp from "./WeatherApp.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <br />
                <h1>Weather App</h1>
                <div className="position-relative">
                  <div className="position-absolute top-0 end-0"></div>
                </div>
                <div className="position-relative">
                  <div className="position-absolute top-0 start-10 ">
                    <WeatherApp />
                  </div>
                  <div className="position-relative">
                    <div className="position-absolute top-20 start-50 translate-middle"></div>
                  </div>
                </div>
                <div className="position-absolute top-10 start-10"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="linkSource">
          <a
            href="https://github.com/ciplenka/awesome-app"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>{" "}
          </a>
          by Viktoriia Zaremba
        </div>
      </header>
    </div>
  );
}

export default App;
