import React from "react";
import { Button, Card, Container, CardText } from "react-bootstrap";
import "./App.css";
import { useState, useEffect } from "react";
import { fetchData } from "./fetchAPI";

function App() {
  const [color, setColor] = useState(["rgb(100,100,50)", "white"]);
  const [quote, setQuote] = useState({});

  const getRandom = () => {
    return Math.floor(Math.random() * 255 + 1);
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      const initialQuote = await fetchData();
      setQuote(initialQuote);
    };
    fetchInitialData();
  }, [color]);

  const changeColor = () => {
    let r = 100;
    let g = 100;
    let b = 100;
    while (r + g + b < 512 && r + g + b > 256) {
      r = getRandom();
      g = getRandom();
      b = getRandom();
    }
    setColor([`rgb(${r},${g},${b})`, `${r + g + b < 256 ? "white" : "black"}`]);
  };

  return (
    <div
      id="full"
      style={{ backgroundColor: color[0] }}
      className="d-flex justify-content-center align-items-center container-fluid"
    >
      <Card
        id="quote-box"
        className="d-flex"
        style={{ backgroundColor: color[1] }}
      >
        <CardText id="text" style={{ color: color[0] }}>
          {quote.quote}
        </CardText>
        <CardText id="author" style={{ color: color[0] }}>
          <em>- {quote.author}</em>
        </CardText>
        <div className="d-flex  justify-content-between align-items-center">
          <Button
            id="new-quote"
            variant="primary"
            onClick={() => changeColor()}
          >
            New Quote
          </Button>
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
            Share
          </a>
        </div>
      </Card>
    </div>
  );
}

export default App;
