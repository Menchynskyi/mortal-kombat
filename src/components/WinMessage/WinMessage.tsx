import React from 'react';
import { useHistory } from 'react-router-dom';
import { MessageContainer, Button } from './WinMessageStyled';

type WinMessageProps = {
  redirectUrl: string;
};

export const WinMessage: React.FC<WinMessageProps> = ({ redirectUrl }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(redirectUrl);
  };

  return (
    <MessageContainer>
      <div>Friendship Won</div>
      <Button type="button" onClick={handleClick}>
        Okay...
      </Button>
    </MessageContainer>
  );
};
