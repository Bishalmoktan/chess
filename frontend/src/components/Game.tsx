import { Chess } from "chess.js";
import { useEffect, useState } from "react";

const Game = () => {
  const [chess, setChess] = useState<Chess>(new Chess());
  const [board, setBoard] = useState(chess.board());

  useEffect(() => {
    setBoard(chess.board());
  }, [chess]);

  return (
    <div className="py-8">
      <h1 className="text-4xl text-white text-center">Game</h1>
      <div className="flex gap-4 justify-center">
      <div className="grid grid-cols-8 w-[50vw]  gap-0">
        {board.map((row, i) => {
          return row.map((box, j) => {
            const boxNum = (i * 8) + (j + 1);
            return (
              <div
                key={boxNum}
                className={`${
                  boxNum % 2 === 1
                    ? i % 2 === 0
                      ? "bg-white"
                      : "bg-green-400"
                    : i % 2 === 0
                    ? "bg-green-400"
                    : "bg-white"
                } w-full h-[6vw] flex justify-center items-center`}
              >
                {box?.type}
              </div>
            );
          });
        })}
      </div>

      <div>
      <h2 className="text-white text-xl">Wish you a good luck!</h2>
      <button className="bg-green-500 text-white py-2 px-6 rounded-md ">Start</button>
      </div>
      </div>
    </div>
  );
};

export default Game;
