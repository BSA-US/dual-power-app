import React from 'react';
import logo from './BSAlogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dual Power App Client</h1>
        <section>
          <h2>Project Overview</h2>
          <p className="App-project-overview-text">
            Our organization will be showcasing Dual Power Projects in an effort
             to not only inform and educate, but inspire as we build toward a
             socialist future.
          </p>
        </section>
        <ul>
          <li>
            A project organized by <a
                href="https://blacksocialists.us/"
                target="_blank">
                Black Socialists in America
              </a>
          </li>
          <li>
            More info about the <a
              href="https://blacksocialists.us/dual-power-map"
              target="_blank">
              Dual Power Map
            </a>
            ...
          </li>
          <li>
            Interested in volunteering? Check out our <a
                href="https://github.com/BSA-US/Dual-Power-App-Client/"
                target="_blank"
                >
                Github Page
              </a>
          </li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
