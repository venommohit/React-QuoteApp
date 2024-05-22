import React from "react";
import FactTitle from "./FactTitle.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    this.FetchQuotes();
  }
  FetchQuotes = () => {
    fetch("https://api.quotable.io/random").then((res) => {
      res.json().then((data) => {
        this.setState({ quote: data.content, author: data.author });
      });
    });
  };
  render() {
    return (
      <>
        <FactTitle
          quote={this.state.quote}
          author={this.state.author}
        ></FactTitle>
        <div>
          <button onClick={this.FetchQuotes}>New quote</button>
        </div>
      </>
    );
  }
}
export default App;
