import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChooseHero, VsScreen } from './pages';
import { MainContainer, Header } from './AppStyled';
import { Audio, NicknameForm } from './components';
import { usePlayersState } from './contexts';
import { usePreload } from './hooks';
import { animations } from './assets';

export const App: React.FC = () => {
  const { firstPlayer } = usePlayersState();
  usePreload(animations);

  return (
    <MainContainer>
      <Header>
        <div>{firstPlayer.nickname}</div>
        {firstPlayer.nickname && (
          <Audio audioUrl="https://firebasestorage.googleapis.com/v0/b/mortal-kombat-8e292.appspot.com/o/music%2Fmk.mp3?alt=media&token=2e0a4300-6089-40df-bc54-34d79b3c71cf" />
        )}
      </Header>
      <Switch>
        <Route path="/" exact component={NicknameForm} />
        <Route path="/mc_choose_hero" component={ChooseHero} />
        <Route path="/mc_vs_screen" component={VsScreen} />
      </Switch>
    </MainContainer>
  );
};
