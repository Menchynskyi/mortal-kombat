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
    switch (event.keyCode) {
      case 81: {
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
      case 87: {
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
      case 69: {
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
      case 82: {
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
      case 84: {
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
      case 89: {
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
