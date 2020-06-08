import { useState, useEffect, useCallback } from 'react';
import { Character, CharactersField } from '../types';

type UseChooseHero = {
  selectedCharacter: Character;
  player: 1 | 2;
};

export const useChooseHero = (
  characterField: CharactersField
): UseChooseHero => {
  const [player, setPlayer] = useState<1 | 2>(1);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case 13: {
          if (player === 1) {
            setPlayer(2);
          }
          break;
        }
        case 37: {
          setCoordinates(({ x, y }) => {
            if (y === 0) {
              if (x === 0) {
                return {
                  x: characterField[0].length - 1,
                  y,
                };
              }
              return {
                x: x - 1,
                y,
              };
            }

            if (x === 1) {
              return {
                x: characterField[y].length - 2,
                y,
              };
            }
            return {
              x: x - 1,
              y,
            };
          });
          break;
        }
        case 38: {
          setCoordinates(({ x, y }) => {
            if (y === 0 && (x === 0 || x === characterField[0].length - 1)) {
              return { x, y };
            }
            if (y === 0) {
              return {
                x,
                y: characterField.length - 1,
              };
            }
            return {
              x,
              y: y - 1,
            };
          });
          break;
        }
        case 39: {
          setCoordinates(({ x, y }) => {
            if (y === 0) {
              if (x === characterField[0].length - 1) {
                return {
                  x: 0,
                  y,
                };
              }
              return {
                x: x + 1,
                y,
              };
            }

            if (x === characterField[y].length - 2) {
              return {
                x: 1,
                y,
              };
            }
            return {
              x: x + 1,
              y,
            };
          });
          break;
        }
        case 40: {
          setCoordinates(({ x, y }) => {
            if (y === 0 && (x === 0 || x === characterField[0].length - 1)) {
              return { x, y };
            }
            if (y === characterField.length - 1) {
              return {
                x,
                y: 0,
              };
            }
            return {
              x,
              y: y + 1,
            };
          });
          break;
        }
        default: {
          break;
        }
      }
    },
    [characterField, player]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    selectedCharacter: characterField[coordinates.y][
      coordinates.x
    ] as Character,
    player,
  };
};
