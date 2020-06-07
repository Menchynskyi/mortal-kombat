import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { VolumeButton } from './AudioStyled';

const initialVolume = 0.1;

export const Audio: React.FC = () => {
  const [volume, setVolume] = useState(initialVolume);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleToggleVolume = () => {
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
  };

  return (
    <div>
      <VolumeButton onClick={handleToggleVolume}>
        <FontAwesomeIcon icon={volume ? faVolumeUp : faVolumeMute} />
      </VolumeButton>
      <audio ref={audioRef}>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/mortal-kombat-8e292.appspot.com/o/music%2Fmk.mp3?alt=media&token=2e0a4300-6089-40df-bc54-34d79b3c71cf"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};
