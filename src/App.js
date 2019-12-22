import React from 'react';
import './App.css'
import Posts from './components/Posts'
import PostForm from './components/PostForm'

// function App() {

  const App = ({ title }) => {
return (
    <div className="App">
      {/* <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title} Learn React 
        </a>
      </header> */}
      <PostForm/>
      <hr/>
      <Posts/>
    </div>
  );
}

export default App;
