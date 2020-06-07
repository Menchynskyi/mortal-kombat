import { animations, images } from '../assets';
import { Character } from '../types';

export const characters: Character[] = Object.keys(images).map(name => {
  return {
    name,
    image: images[name as keyof typeof images],
    animation: animations[name as keyof typeof images],
  };
});

export const characterField = [
  characters.slice(0, 7),
  [null, ...characters.slice(7, 12), null],
  [null, ...characters.slice(12, 17), null],
  [null, ...characters.slice(17), null],
];
