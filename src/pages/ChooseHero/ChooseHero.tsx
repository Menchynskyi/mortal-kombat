import React from 'react';
import {
  ChooseHeroContainer,
  SectionHeader,
  Field,
  Row,
  Cell,
} from './ChooseHeroStyled';
import { characterField } from '../../data';
import { CharactersField } from '../../types';

export const ChooseHero: React.FC = () => {
  const renderField = (field: CharactersField) => {
    return field.map((row, y) => {
      return (
        <Row key={JSON.stringify(row)}>
          {row.map((character, x) => {
            if (!character) return null;
            return (
              <Cell isActive={x === 1 && y === 1} key={character.name}>
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
      <Field>{renderField(characterField)}</Field>
    </ChooseHeroContainer>
  );
};
