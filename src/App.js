import React from 'react';
import logo from './logo.svg';

// function App() {
  const App = ({ title }) => {
return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title} 
        </a>
      </header>
    </div>
  );
}

export default App;
