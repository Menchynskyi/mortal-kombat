export type Character = {
  name: string;
  image: string;
  animation: string;
};

export type CharactersField = (Character | null)[][];
