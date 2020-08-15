import React, { useState, Fragment } from "react";

interface Props {
  tiles: Array<Number>;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Board: React.FC<Props> = ({ tiles, onClick }: Props) => {
  return (
    <Fragment>
      <div className="row">
        {tiles.slice(0, 2).map((curr, index) => {
          return (
            <div
              className={`box ${tiles[index] == 0 ? "off" : "on"}`}
              key={index}
              id={`${index}`}
              onClick={onClick}
            ></div>
          );
        })}
      </div>
      <div className="row">
        {tiles.slice(2, 6).map((curr, index) => {
          return (
            <div
              className={`box ${tiles[index + 2] == 0 ? "off" : "on"}`}
              id={`${index + 2}`}
              key={index}
              onClick={onClick}
            ></div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Board;
