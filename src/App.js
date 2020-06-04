import React from 'react';
import Form from './components/Form'
import './App.css';

class App extends React.Component {

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(response => response.json())
      .then((newlyCreatedUser) => {
        console.log(newlyCreatedUser)
      })
  }
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
}
export default App;
