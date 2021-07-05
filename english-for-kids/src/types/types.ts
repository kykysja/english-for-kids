export type WordCardBody = {
  id: number;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
};

export type Category = {
  id: number;
  name: string;
  image: string;
  path: string;
  words: WordCardBody[];
};
