import React from 'react';
import {
  ChooseHeroContainer,
  SectionHeader,
  Field,
  Row,
  Cell,
  SelectedCharacter,
  CharacterName,
} from './ChooseHeroStyled';
import { characterField } from '../../data';
import { CharactersField } from '../../types';
import { useChooseHero } from '../../hooks';
import { usePlayersState } from '../../contexts';

export const ChooseHero: React.FC = () => {
  const {
    firstSelectedCharacter,
    secondSelectedCharacter,
    player,
    coordinates,
  } = useChooseHero(characterField);

  const renderField = (field: CharactersField) => {
    return field.map((row, y) => {
      return (
        <Row key={JSON.stringify(row)}>
          {row.map((character, x) => {
            if (!character) return null;
            const isActive = coordinates.x === x && coordinates.y === y;
            return (
              <Cell player={player} isActive={isActive} key={character.name}>
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
          <img
            src={firstSelectedCharacter.animation}
            alt={firstSelectedCharacter.name}
          />
          <CharacterName>{firstSelectedCharacter.name}</CharacterName>
        </SelectedCharacter>
        {player === 2 && (
          <SelectedCharacter player={2}>
            <img
              src={secondSelectedCharacter.animation}
              alt={secondSelectedCharacter.name}
            />
            <CharacterName>{secondSelectedCharacter.name}</CharacterName>
          </SelectedCharacter>
        )}
      </Field>
    </ChooseHeroContainer>
  );
};
