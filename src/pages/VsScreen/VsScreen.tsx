import React, { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import {
  FightScreenContainer,
  SectionHeader,
  VsStyled,
  FightersContainer,
} from './VsScreenStyled';
import { usePlayersState } from '../../contexts';
import { generateRandomNumber } from '../../utils';
import { arenasList } from '../../data';
import { useTimer } from '../../hooks';
import { WinMessage } from '../../components';

export const VsScreen: React.FC = () => {
  const { firstPlayer, secondPlayer } = usePlayersState();
  const arena = useMemo(() => arenasList[generateRandomNumber(4)], []);
  const seconds = useTimer(10);

  if (!seconds) return <WinMessage redirectUrl="/" />;

  if (!firstPlayer.character || !secondPlayer.character) {
    return <Redirect to="/mc_choose_hero" />;
  }

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
        <img
          src={secondPlayer.character.animation}
          alt={secondPlayer.character.name}
        />
      </FightersContainer>
    </FightScreenContainer>
  );
};
