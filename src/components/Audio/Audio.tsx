import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { VolumeButton } from './AudioStyled';
import { usePlayersState } from '../../contexts';

type AudioProps = {
  audioUrl: string;
};

const initialVolume = 0.1;

export const Audio: React.FC<AudioProps> = ({ audioUrl }) => {
  const [volume, setVolume] = useState(initialVolume);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { firstPlayer } = usePlayersState();

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'm') {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  }, []);

  const handleToggleVolume = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (audioRef.current) {
      if (volume > 0) {
        audioRef.current.volume = 0;
        setVolume(0);
      }
      if (volume === 0) {
        audioRef.current.volume = initialVolume;
        setVolume(initialVolume);
      }
    }
    event.currentTarget.blur(); // for correct work of pressing Enter
  };

  useEffect(() => {
    if (firstPlayer.nickname && audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
    // eslint-disable-next-line
  }, [firstPlayer.nickname]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <VolumeButton ref={buttonRef} onClick={handleToggleVolume}>
        <FontAwesomeIcon icon={volume ? faVolumeUp : faVolumeMute} />
      </VolumeButton>
      <audio ref={audioRef}>
        <source src={audioUrl} type="audio/mpeg" />
      </audio>
    </div>
  );
};
