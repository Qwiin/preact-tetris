/** @jsx h */
import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import { signal } from '@preact/signals';

const tick = signal(0);

setInterval(() => {
  tick.value = tick.value + 1;
}, 1000);

const colorEnum = [
  'transparent',
  'blue-400',
  'blue-700',
  'red-400',
  'yellow-500',
  'green-500',
  'red-700',
];

export const Game = (props) => {
  // const [count, setCount] = useState(0);

  const emptyRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const board = useRef([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 6, 0],
    [4, 4, 2, 3, 5, 2, 2, 2, 6, 2],
    [4, 4, 2, 3, 5, 5, 0, 2, 0, 2],
    [0, 2, 2, 3, 3, 5, 6, 0, 2, 2],
  ]);

  const getBoardCols = () => {
    board.current;

    let rowLen = board.current[0].length;
    let cells = board.current.flat();
    let colLen = board.current.length;
    let boardCols = [];
    for (let i = 0; i < rowLen; i++) {
      col = [];
      for (let j = 0; j < colLen; j++) {
        col.push(cells[j * rowLen + i]);
      }
      boardCols.push(col);
    }
  };

  const updateBoard = () => {
    const rows = board.current;
    const nRows = rows.length;

    const newRows = rows.filter((row) => {
      if (row.includes(0)) {
        return true;
      }
      return false;
    });

    let nNewRows = newRows.length;
    for (let i = 0; i < nRows - nNewRows; i++) {
      newRows.unshift([...emptyRow]);
    }

    // updateRef
    for (let i = 0; i < nRows; i++) {
      board.current[i] = [...newRows[i]];
    }
  };

  const a = '2';

  useEffect(() => {
    updateBoard(tick.value);
  }, []);

  const renderBoard = () => {
    const rows = board.current;
    const nRows = rows.length;

    // return 'Text';

    // return (
    //   <>

    return rows.map((row) => {
      return (
        <div className="flex flex-row gap-0">
          {row.map((cellValue) => {
            let cellColor =
              cellValue === 0
                ? 'bg-transparent'
                : `border bg-${colorEnum[cellValue]} border-${colorEnum[cellValue]} border-outset`;
            return (
              <div
                className={`h-4 w-4 ${cellColor} border-content`}
                style={{ borderStyle: 'outset' }}
              ></div>
            );
          })}
        </div>
      );
    });
    // </>
    // );
  };

  return (
    <div>
      <h1>{tick.value}</h1>
      <div className="h-80 w-40 bg-blue-500 flex flex-col gap-0">
        {renderBoard()}
      </div>
    </div>
  );
};
