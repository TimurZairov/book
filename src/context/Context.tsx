import {ReactNode, createContext, useState} from 'react';
import React from 'react';
import data from '../data/author.json';
import booksData from '../data/books.json';
import {Author, Book} from '../type/types';

export const AppContext = createContext<AppContextProps>({
  author: undefined,
  setAuthor: () => {},
  books: [],
  setBooks: () => {},
  sortingAuthorHandler: () => {},
  sortingBookHandler: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextProps {
  author: Author[] | undefined;
  setAuthor: React.Dispatch<React.SetStateAction<Author[] | undefined>>;
  books: Book[] | undefined;
  setBooks: React.Dispatch<React.SetStateAction<Book[] | undefined>>;
  sortingAuthorHandler: (sort: string) => void;
  sortingBookHandler: (sort: string) => void;
}

const AppProvider = ({children}: AppProviderProps) => {
  const [author, setAuthor] = useState<Author[] | undefined>(data);
  const [books, setBooks] = useState<Book[] | undefined>(booksData);

  const sortingAuthorHandler = (sort: string) => {
    const sortAuthor = [...author];
    if (sort === 'по имени') {
      const sorted = sortAuthor.sort((a, b) => {
        return a?.firstName?.localeCompare(b?.firstName);
      });
      setAuthor([...sorted]);
    } else if (sort === 'по фамилии') {
      const sorted = sortAuthor.sort((a, b) => {
        return a?.lastName?.localeCompare(b?.lastName);
      });
      setAuthor([...sorted]);
    } else if (sort === 'по отчеству') {
      const sorted = sortAuthor.sort((a, b) => {
        return a?.middleName?.localeCompare(b?.middleName);
      });
      setAuthor([...sorted]);
    } else if (sort === 'по id') {
      const sorted = sortAuthor.sort((a, b) => {
        return a?.id - b?.id;
      });
      setAuthor([...sorted]);
    }
  };

  const sortingBookHandler = (sort: string) => {
    const sortAuthor = [...books];
    if (sort === 'по названию') {
      const sorted = sortAuthor.sort((a, b) => {
        return a?.title?.localeCompare(b?.title);
      });
      setBooks([...sorted]);
    } else if (sort === 'по автору') {
      const sorted = sortAuthor.sort((a, b) => {
        return a?.bookAuthor?.localeCompare(b?.bookAuthor);
      });
      setBooks([...sorted]);
    } else if (sort === 'по издателю') {
      const sorted = sortAuthor.sort((a, b) => {
        return a?.publisher?.localeCompare(b?.publisher);
      });
      setBooks([...sorted]);
    } else if (sort === 'по году') {
      console.log(typeof sort);
      const sorted = sortAuthor.sort((a, b) => {
        return +a.year - +b.year;
      });
      setBooks([...sorted]);
    } else if (sort === 'по id') {
      console.log(typeof sort);
      const sorted = sortAuthor.sort((a, b) => {
        return +a.id - +b.id;
      });
      setBooks([...sorted]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        author,
        setAuthor,
        books,
        setBooks,
        sortingAuthorHandler,
        sortingBookHandler,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
