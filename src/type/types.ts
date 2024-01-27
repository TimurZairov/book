export type Author = {
  id: number;
  lastName?: string;
  firstName?: string;
  middleName?: string;
  birthDate?: string;
};

export type Book = {
  id: number;
  authorId: number;
  bookAuthor: string;
  title: string;
  publisher: string;
  year: number;
};
