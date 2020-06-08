import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type Character = {
  name: string;
  image: string;
  animation: string;
};

export type CharactersField = (Character | null)[][];

export type Abilities = Array<string | IconDefinition>;
