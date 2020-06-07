import { animations, images } from '../assets';

type Characters = {
  name: string;
  image: string;
  animation: string;
};

export const characters: Characters[] = Object.keys(images).map(name => {
  return {
    name,
    image: images[name as keyof typeof images],
    animation: animations[name as keyof typeof images],
  };
});
