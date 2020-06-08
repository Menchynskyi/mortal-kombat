import React, { createContext, useReducer, useContext } from 'react';
import { Character } from '../types';

type Player = {
  nickname: string;
  character: Character | null;
};

type State = {
  firstPlayer: Player;
  secondPlayer: Player;
};

export type Action =
  | {
      type: 'setPlayersCharacter';
      payload: { player: 1 | 2; character: Character };
    }
  | { type: 'setNickname'; payload: { player: 1 | 2; nickname: string } };

export type PlayersContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type PlayersProviderProps = { children: React.ReactNode };

export const initialState: State = {
  firstPlayer: {
    nickname: '',
    character: null,
  },
  secondPlayer: {
    nickname: '',
    character: null,
  },
};

const playersReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setPlayersCharacter': {
      if (action.payload.player === 1) {
        return {
          ...state,
          firstPlayer: {
            ...state.firstPlayer,
            character: action.payload.character,
          },
        };
      }
      return {
        ...state,
        secondPlayer: {
          ...state.secondPlayer,
          character: action.payload.character,
        },
      };
    }
    case 'setNickname': {
      if (action.payload.player === 1) {
        return {
          ...state,
          firstPlayer: {
            ...state.firstPlayer,
            nickname: action.payload.nickname,
          },
        };
      }
      return {
        ...state,
        secondPlayer: {
          ...state.secondPlayer,
          nickname: action.payload.nickname,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const PlayersContext = createContext<PlayersContextState | undefined>(
  undefined
);

export const PlayersProvider: React.FC<PlayersProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(playersReducer, initialState);
  return (
    <PlayersContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayersContext = (): PlayersContextState => {
  const context = useContext(PlayersContext);
  if (context === undefined) {
    throw new Error('usePlayersContext must be used within a PlayersProvider');
  }
  return context;
};

export const usePlayersState = (): State => {
  const context = useContext(PlayersContext);
  if (context === undefined) {
    throw new Error('usePlayersState must be used within a PlayersProvider');
  }
  return context.state;
};

export const usePlayersDispatch = (): React.Dispatch<Action> => {
  const context = useContext(PlayersContext);
  if (context === undefined) {
    throw new Error('usePlayersDispatch must be used within a PlayersProvider');
  }
  return context.dispatch;
};
