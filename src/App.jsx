import React from "react";
import { Button, Card, Container, CardText } from "react-bootstrap";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState({
    backgroundColor: "rgb(255,255,255)",
    color: "rgb(-255,-255,-255)",
  });

  const getRandom = () => {
    return Math.floor(Math.random() * 255 + 1);
  };
  const changeColor = () => {
    let r = 100;
    let g = 100;
    let b = 100;
    while (r + g + b < 512 && r + g + b > 256) {
      r = getRandom();
      g = getRandom();
      b = getRandom();
    }
    setColor({
      backgroundColor: `rgb(${r},${g},${b})`,
      color: `${r + g + b < 256 ? "white" : "black"}`,
    });
  };

  console.log(color);

  return (
    <Container className="d-flex justify-content-center align-items-center full">
      <Card id="quote-box" className="d-flex" style={color}>
        <CardText id="text" style={color}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          dignissimos corrupti fuga ipsa debitis perferendis omnis?
        </CardText>
        <CardText id="author">
          <em>- sdasdasdasd</em>
        </CardText>
        <div className="d-flex  justify-content-between">
          <Button
            id="new-quote"
            variant="primary"
            onClick={() => changeColor()}
          >
            New Quote
          </Button>
          <a id="tweet-quote" href="#">
            Share
          </a>
        </div>
      </Card>
    </Container>
  );
}

export default App;
