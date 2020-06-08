import { useEffect } from 'react';

type Assets = {
  [key: string]: string;
};

export const usePreload = (assets: Assets): void => {
  // TODO: make loading state with useState and return it
  useEffect(() => {
    Object.values(assets).map(animation => {
      new Image().src = animation;
    });
  }, []);
};
