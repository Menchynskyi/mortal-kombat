import React, { useMemo, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FightScreenContainer,
  SectionHeader,
  VsStyled,
  FightersContainer,
  AbilityList,
  AbilityItem,
} from './VsScreenStyled';
import { usePlayersState, usePlayersDispatch } from '../../contexts';
import { generateRandomNumber } from '../../utils';
import { arenasList, abilityKeys, abilityIcons } from '../../data';
import { useTimer, useAbilities } from '../../hooks';
import { WinMessage } from '../../components';
import { logo } from '../../assets';
import { Abilities } from '../../types';

export const VsScreen: React.FC = () => {
  const { firstPlayer, secondPlayer } = usePlayersState();

  const seconds = useTimer(10);
  const abilities = useAbilities(abilityIcons, abilityKeys);

  const dispatch = usePlayersDispatch();
  const arena = useMemo(() => arenasList[generateRandomNumber(4)], []);

  useEffect(() => {
    return () => {
      dispatch({ type: 'resetCharacters' });
    };
  }, [dispatch]);

  if (!seconds) return <WinMessage redirectUrl="/" />;

  if (!firstPlayer.character || !secondPlayer.character) {
    return <Redirect to="/mc_choose_hero" />;
  }

  const renderAbilities = (abilitityList: Abilities) => {
    return abilitityList.map(ability => {
      if (typeof ability === 'string') {
        return <AbilityItem backgroundUrl={logo}>{ability}</AbilityItem>;
      }
      return (
        <AbilityItem backgroundUrl={logo}>
          <FontAwesomeIcon icon={ability} />
        </AbilityItem>
      );
    });
  };

  return (
    <FightScreenContainer backgroundUrl={arena}>
      <VsStyled>
        <div>VS</div>
        <div>{seconds}</div>
      </VsStyled>
      <SectionHeader>
        <div>{firstPlayer.character.name}</div>
        <div>{secondPlayer.character.name}</div>
      </SectionHeader>
      <FightersContainer>
        <img
          src={firstPlayer.character.animation}
          alt={firstPlayer.character.name}
        />
        <AbilityList>{renderAbilities(abilities)}</AbilityList>
        <img
          src={secondPlayer.character?.animation}
          alt={secondPlayer.character?.name}
        />
      </FightersContainer>
    </FightScreenContainer>
  );
};
