import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { usePlayersDispatch, usePlayersState } from '../../contexts';
import { FormStyled, InputStyled, SubmitButton } from './NicknameFormStyled';

export const NicknameForm: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const dispatch = usePlayersDispatch();
  const { firstPlayer } = usePlayersState();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (firstPlayer.nickname) {
    return <Redirect to="/mc_choose_hero" />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nickname.trim()) {
      dispatch({ type: 'setNickname', payload: { player: 1, nickname } });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        placeholder="Nickname"
        ref={inputRef}
        value={nickname}
        onChange={handleChange}
      />
      <SubmitButton type="submit">Play!</SubmitButton>
    </FormStyled>
  );
};
