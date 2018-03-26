import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { NASA_API_KEY }
class App extends Component {
  state = {info:[] }
  componentDidMount(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    .then(res => res.json())
    .then((responseData) => {
      console.log(responseData);
      this.setState({
        explanation: responseData.explanation,
        imgurl: responseData.hdurl,
        copy: responseData.copyright,
        date: responseData.date,
        title: responseData.title
      });
    });
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Stargazer</h1>
      </header>


      <h2>{this.state.title}</h2>
      <div id='photo-box'>
      <img id='day-photo' src={this.state.imgurl} className="image" alt={this.state.title} />
      <p>&copy; {this.state.copy}</p>
      </div>
      <div>
      <p className="info">
      {this.state.explanation}
      </p>
      </div>
      </div>
    );
  }
}

export default App;
