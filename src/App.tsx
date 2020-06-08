import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChooseHero, VsScreen } from './pages';
import { MainContainer, Header } from './AppStyled';
import { Audio, NicknameForm } from './components';
import { usePlayersState } from './contexts';

export const App: React.FC = () => {
  const { firstPlayer } = usePlayersState();

  return (
    <MainContainer>
      <Header>
        <div>{firstPlayer.nickname}</div>
        <Audio />
      </Header>
      <Switch>
        <Route path="/" exact component={NicknameForm} />
        <Route path="/mc_choose_hero" component={ChooseHero} />
        <Route path="/mc_vs_screen" component={VsScreen} />
      </Switch>
    </MainContainer>
  );
};
