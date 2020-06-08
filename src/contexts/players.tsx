import React, { createContext, useReducer, useContext } from 'react';
import { Character } from '../types';

type Player = {
  nickName: string;
  character: Character | null;
};

type State = {
  firstPlayer: Player;
  secondPlayer: Player;
};

export type Action = {
  type: 'setPlayersCharacter';
  payload: { player: 1 | 2; character: Character };
};

export type PlayersContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type PlayersProviderProps = { children: React.ReactNode };

export const initialState: State = {
  firstPlayer: {
    nickName: '',
    character: null,
  },
  secondPlayer: {
    nickName: '',
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
