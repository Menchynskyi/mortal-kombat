import React from 'react';
import {
  ChooseHeroContainer,
  SectionHeader,
  Field,
  Row,
  Cell,
  SelectedCharacter,
} from './ChooseHeroStyled';
import { characterField } from '../../data';
import { CharactersField } from '../../types';
import { useChooseHero } from '../../hooks';

export const ChooseHero: React.FC = () => {
  const { selectedCharacter, player } = useChooseHero(characterField);

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
