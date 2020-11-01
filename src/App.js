import React from "react";
import DisplayQuotes from "./component/DisplayQuotes";

import "./App.css";
import { render } from "@testing-library/react";
import axios from "axios";

const samplequote = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: samplequote
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
      // Extract the DATA from the received response
      .then((response) => response.data)


      // Use this data to update the state
      .then((data) => {
        this.setState({
          quote: data[0]
        });
      });
  }

  render() {

    return (
      <div className="App">
        <DisplayQuotes quote={this.state.quote} />

        <button type="button" onClick={this.getQuote}>
          Get a neuw simpson quote
        </button>
      </div>
    );
  }
}

export default App;
