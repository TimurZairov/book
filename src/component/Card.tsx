import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {Author, Book} from '../type/types';
import TableCard from './TableCard';

import {useNavigation} from '@react-navigation/native';
import {StackCardProps} from '../type/navigation';

import {AppContext} from '../context/Context';

export interface CardProps {
  item: Author & Book;
  booksCard?: boolean;
}

const Card = ({item, booksCard}: CardProps) => {
  const {books, author} = useContext(AppContext);
  const {
    id,
    firstName,
    lastName,
    middleName,
    birthDate,
    authorId,
    bookAuthor,
    title,
    publisher,
    year,
  } = item;
  const navigation = useNavigation<StackCardProps>();

  const navigationHandler = (idCard: number) => {
    if (!idCard) {
      return;
    }
    const authorCard = author?.filter(
      (authorItem: Author) => authorItem.id === idCard,
    )[0];

    if (!authorCard) {
      return;
    } else {
      navigation.navigate('Edit', {author: authorCard});
    }
  };

  const bookNavigationHandler = (idBook: number) => {
    if (!idBook) {
      return;
    }
    const bookCard = books?.filter(
      (bookItem: Author) => bookItem.id === idBook,
    )[0];

    if (!bookCard) {
      return;
    } else {
      navigation.navigate('Edit', {book: bookCard});
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        !booksCard ? navigationHandler(item.id) : bookNavigationHandler(item.id)
      }>
      <TableCard
        id={id}
        firstName={firstName}
        lastName={lastName}
        middleName={middleName}
        birthDate={birthDate}
        authorId={authorId}
        bookAuthor={bookAuthor}
        title={title}
        publisher={publisher}
        year={year}
        booksCard={booksCard}
      />
    </TouchableOpacity>
  );
};

export default Card;
