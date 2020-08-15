import React, { Fragment, useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [tiles, setTiles] = useState<Array<Number>>([0, 0, 0, 0, 0]);

  const onClick = function (e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();

    const index = (e.target as Element).getAttribute("id");
  };

  useEffect(() => {
    if (
      tiles.every((curr) => {
        return curr === 1;
      })
    ) {
      console.log("You won!!");
    }
  }, []);

  const init = () => {
    const candidate = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 2)
    );

    if (
      candidate.every((current) => {
        return current === 1;
      })
    ) {
      candidate[Math.floor(Math.random() * 5)] = 0;
    }

    setTiles(candidate);
  };

  const check = () => {
    console.log(tiles);
  };

  return (
    <Fragment>
      <div className="container">
        <Board tiles={tiles} onClick={onClick} />
        <button onClick={check}>See State</button>
        <button onClick={init}>Restart</button>
      </div>
    </Fragment>
  );
}

export default App;
