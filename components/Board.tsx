import { useCallback, useEffect, useMemo, useState } from 'react';
import { Direction } from '../type/Direction';
import ControlPanel from './ControlPanel';

interface Props {
  square: number;
}

const directionDegrees = {
  right: -45,
  down: 45,
  left: 135,
  up: -135
}

const directionNames = {
  1: 'EAST',
  2: 'SOUTH',
  3: 'WEST',
  4: 'NORTH'
}

const Board: React.FC<Props> = props => {
  const { square } = props;
  const [x, setX] = useState<number>(-1);
  const [y, setY] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(directionDegrees.right);
  const [direction, setDirection] = useState<Direction>(1);

  const squares = [...Array.from({ length: square * square }, (_, i) => i + 1)];


  const left = `calc(100% / ${square} * ${x})`
  const bottom = `calc(100% / ${square} * ${y})`

  const commands = useMemo(() => {
    return {
      place: (newX: number = 0, newY: number = 0, newDirection: Direction) => {

        // steps
        // const xSteps = newX - x
        // const ySteps = newY - y

        if (newX > (square - 1) || newX < 0 || newY > (square - 1) || newY < 0) {
          // error handling 
          return null
        }
        setDirection(newDirection)

        setX(newX)
        setY(newY)

      },
      move: () => {
        if (
          x < 0 || y < 0
        ) {
          return null
        }

        direction === 1 ? commands.place(x + 1, y, direction) : null
        direction === 2 ? commands.place(x, y - 1, direction) : null
        direction === 3 ? commands.place(x - 1, y, direction) : null
        direction === 4 ? commands.place(x, y + 1, direction) : null
      },
      left: () => {
        if (
          x < 0 || y < 0
        ) {
          return null
        }

        setDirection(direction === 1 ? 4 : (direction - 1 as Direction));
        setRotate(rotate - 90);
      },
      right: () => {
        if (
          x < 0 || y < 0
        ) {
          return null
        }

        setDirection(direction === 4 ? 1 : (direction + 1 as Direction));
        setRotate(rotate + 90);
      },
      report: () => {
        if (
          x < 0 || y < 0
        ) {
          return null
        }

        console.log(x, y, directionNames[direction])
        alert(`${x},${y},${directionNames[direction]}`)
      },
    }
  }, [direction, rotate, square, x, y])

  const keyboardEvents: Record<string, () => void> = useMemo(() => {
    return {
      ArrowRight: () => {
        commands.right();
      },
      ArrowLeft: () => {
        commands.left();
      },
      Enter: () => {
        commands.move()
      },
      P: () => {
        commands.place(0, 0, direction)
      },
      p: () => {
        commands.place(0, 0, direction)
      },
      R: () => {
        commands.report()
      },
      r: () => {
        commands.report()
      }
    }
  }, [commands, direction])


  const keypress = useCallback((ev: KeyboardEvent) => {
    const { key } = ev;
    keyboardEvents[key] ? keyboardEvents[key]() : null
  }, [keyboardEvents])

  // keyboard events
  useEffect(() => {
    window.addEventListener("keydown", keypress);
    return () => {
      window.removeEventListener("keydown", keypress);
    };
  }, [keypress]);

  return (
    <div className="board">
      <ControlPanel x={x} y={y} />
      <div className="board__bot" style={{ width: `calc(100%/${square})`, height: `calc(100%/${square})`, left, bottom }}>
        <div className="board__bot__arrow" style={{ transform: `rotate(${rotate}deg)` }}></div>
      </div>
      {squares.map(i => {
        return (
          <li key={i} style={{ width: `calc(100%/${square})`, height: `calc(100%/${square})` }} />
        );
      })}
    </div>
  );
};


export default Board;