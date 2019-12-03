import React from 'react';
import './App.css';
import GitUserList from "./components/GitUserList";
import axios from "axios";

class App extends React.Component {

  state = {
    fetchData: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/grifmang/followers')
    .then(response => {
      this.setState({fetchData: response.data})
    })
  }

  render() {
    return (
      <>
      <div className="container">
        <div className="header">
          <img src="./assets/lambdalogo.png" alt="Lambda Logo"/>
          <p>❤️'s</p>
          <img src="./assets/githublogo.png" alt="GitHub Logo" />
        </div>
        <div>
          <GitUserList data={this.state.fetchData} />
        </div>
      </div>
      </>
    )
  }
}

export default App;
