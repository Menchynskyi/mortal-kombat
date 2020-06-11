import { useState, useEffect, useCallback } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { generateRandomNumber } from '../utils';
import { Abilities } from '../types';

export const useAbilities = (
  abilityIcons: IconDefinition[],
  abilityKeys: string[]
): Abilities => {
  const [abilities, setAbilities] = useState<Abilities>(abilityKeys);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'q': {
        setAbilities(prev => {
          return prev.map((item, id) => {
            if (id === 0) {
              return abilityIcons[generateRandomNumber(6)];
            }
            return item;
          });
        });
        break;
      }
      case 'w': {
        setAbilities(prev => {
          return prev.map((item, id) => {
            if (id === 1) {
              return abilityIcons[generateRandomNumber(6)];
            }
            return item;
          });
        });
        break;
      }
      case 'e': {
        setAbilities(prev => {
          return prev.map((item, id) => {
            if (id === 2) {
              return abilityIcons[generateRandomNumber(6)];
            }
            return item;
          });
        });
        break;
      }
      case 'r': {
        setAbilities(prev => {
          return prev.map((item, id) => {
            if (id === 3) {
              return abilityIcons[generateRandomNumber(6)];
            }
            return item;
          });
        });
        break;
      }
      case 't': {
        setAbilities(prev => {
          return prev.map((item, id) => {
            if (id === 4) {
              return abilityIcons[generateRandomNumber(6)];
            }
            return item;
          });
        });
        break;
      }
      case 'y': {
        setAbilities(prev => {
          return prev.map((item, id) => {
            if (id === 5) {
              return abilityIcons[generateRandomNumber(6)];
            }
            return item;
          });
        });
        break;
      }
      default: {
        break;
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return abilities;
};
