import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Character, CharactersField } from '../types';
import { usePlayersState, usePlayersDispatch } from '../contexts';

type UseChooseHero = {
  firstSelectedCharacter: Character;
  secondSelectedCharacter: Character;
  player: 1 | 2;
  coordinates: { x: number; y: number };
  setCoordinates: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
};

const initialCoordinates = {
  x: 3,
  y: 1,
};

export const useChooseHero = (
  characterField: CharactersField
): UseChooseHero => {
  const [player, setPlayer] = useState<1 | 2>(1);
  const [coordinates, setCoordinates] = useState(initialCoordinates);
  const { firstPlayer, secondPlayer } = usePlayersState();
  const dispatch = usePlayersDispatch();
  const history = useHistory();

  const firstSelectedCharacter =
    firstPlayer.character ||
    (characterField[coordinates.y][coordinates.x] as Character);

  const secondSelectedCharacter =
    secondPlayer.character ||
    (characterField[coordinates.y][coordinates.x] as Character);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case 13: {
          if (player === 1) {
            dispatch({
              type: 'setPlayersCharacter',
              payload: {
                player: 1,
                character: characterField[coordinates.y][
                  coordinates.x
                ] as Character,
              },
            });
            setPlayer(2);
            setCoordinates(initialCoordinates);
          }
          if (player === 2) {
            dispatch({
              type: 'setPlayersCharacter',
              payload: {
                player: 2,
                character: characterField[coordinates.y][
                  coordinates.x
                ] as Character,
              },
            });
            history.push('/mc_vs_screen');
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
    [characterField, player, coordinates, dispatch, history]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    firstSelectedCharacter,
    secondSelectedCharacter,
    player,
    coordinates,
    setCoordinates,
  };
};
