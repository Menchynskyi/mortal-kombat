import React from 'react';
import { useLocation, Redirect, Switch, Route } from 'react-router-dom';
import { ChooseHero, VsScreen } from './pages';
import { MainContainer, Header } from './AppStyled';
import { Audio } from './components';

export const App: React.FC = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return <Redirect to="/mc_choose_hero" />;
  }

  return (
    <MainContainer>
      <Header>
        <div>nickname</div>
        <Audio />
      </Header>
      <Switch>
        <Route path="/mc_choose_hero" component={ChooseHero} />
        <Route path="/mc_vs_screen" component={VsScreen} />
      </Switch>
    </MainContainer>
  );
};
