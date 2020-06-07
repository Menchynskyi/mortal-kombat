import React, { useState, useEffect } from 'react';
import {
  ChooseHeroContainer,
  SectionHeader,
  Field,
  Row,
  Cell,
  SelectedCharacter,
} from './ChooseHeroStyled';
import { characterField } from '../../data';
import { CharactersField, Character } from '../../types';

const initialSelectedCharacter = {
  ...(characterField[0][0] as Character),
  coordinates: {
    x: 0,
    y: 0,
  },
};

export const ChooseHero: React.FC = () => {
  const [player, setPlayer] = useState<1 | 2>(1);
  const [selectedCharacter, setSelectedCharacter] = useState(
    initialSelectedCharacter
  );

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.keyCode) {
      case 13: {
        if (player === 1) {
          setPlayer(2);
        }
        break;
      }
      case 37: {
        setSelectedCharacter(prev => {
          const { x, y } = prev.coordinates;
          if (y === 0) {
            if (x === 0) {
              return {
                ...(characterField[0][
                  characterField[0].length - 1
                ] as Character),
                coordinates: {
                  x: characterField[0].length - 1,
                  y,
                },
              };
            }
            return {
              ...(characterField[0][x - 1] as Character),
              coordinates: {
                x: x - 1,
                y,
              },
            };
          }
          return prev;
        });
        break;
      }
      case 38: {
        setSelectedCharacter(prev => {
          const { x, y } = prev.coordinates;
          if (y === 0 && (x === 0 || x === characterField[0].length)) {
            return prev;
          }
          if (y === 0) {
            const lastId = characterField.length - 1;
            return {
              ...(characterField[lastId][x] as Character),
              coordinates: {
                x,
                y: lastId,
              },
            };
          }
          return {
            ...(characterField[y - 1][x] as Character),
            coordinates: {
              x,
              y: y - 1,
            },
          };
        });
        break;
      }
      case 39: {
        break;
      }
      case 40: {
        break;
      }
      default: {
        break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const renderField = (field: CharactersField) => {
    return field.map(row => {
      return (
        <Row key={JSON.stringify(row)}>
          {row.map(character => {
            if (!character) return null;
            const isActive = character.name === selectedCharacter.name;
            return (
              <Cell label={player} isActive={isActive} key={character.name}>
                <img src={character.image} alt={character.name} />
              </Cell>
            );
          })}
        </Row>
      );
    });
  };

  return (
    <ChooseHeroContainer>
      <SectionHeader>Select your fighter</SectionHeader>
      <Field>
        {renderField(characterField)}
        <SelectedCharacter player={1}>
          <img src={selectedCharacter.animation} alt={selectedCharacter.name} />
        </SelectedCharacter>
        {player === 2 && (
          <SelectedCharacter player={2}>
            <img
              src={selectedCharacter.animation}
              alt={selectedCharacter.name}
            />
          </SelectedCharacter>
        )}
      </Field>
    </ChooseHeroContainer>
  );
};
