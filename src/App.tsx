import React, { Fragment, useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [tiles, setTiles] = useState<Array<Number>>([0, 0, 0, 0, 0]);

  const adj_matrix = [
    [1, 2, 3],
    [0, 3, 4],
    [0, 3],
    [0, 1, 2, 4],
    [1, 3],
  ];

  const onClick = function (e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();

    const index = Number((e.target as Element).getAttribute("id"));

    console.log(index);

    if (index !== null) {
      console.log("###");

      let items = [...tiles];

      let item = tiles[index];

      item = 1 - item.valueOf();

      items[index] = item;

      for (let i = 0; i < adj_matrix[index.valueOf()].length; i++) {
        let item = items[adj_matrix[index.valueOf()][i]];

        item = 1 - item.valueOf();

        items[adj_matrix[index.valueOf()][i]] = item;
      }

      setTiles(items);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (
      tiles.every((curr) => {
        return curr == Number(1);
      }) &&
      tiles.length != 0
    ) {
      alert("You won!!");
    }
  });

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
        <div className="board">
          <Board tiles={tiles} onClick={onClick} />
          <button onClick={init}>Restart</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
