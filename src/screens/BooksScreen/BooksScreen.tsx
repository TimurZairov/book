import React, {useContext, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Container from '../../component/Container';
import Card from '../../component/Card';

import Input from '../../component/Input';
import {colors} from '../../theme/colors';
import {AppContext} from '../../context/Context';
import Button from '../../component/Button';
import SelectDropdown from 'react-native-select-dropdown';
import {Book} from '../../type/types';

const sorting = ['по названию', 'по автору', 'по издателю', 'по году', 'по id'];

const BooksScreen = () => {
  const {books, author, setBooks, sortingBookHandler} = useContext(AppContext);

  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookPublisher, setBookPublisher] = useState('');
  const [bookYear, setBookYear] = useState('');
  const [dropDownList, setDropDownList] = useState<any>([]);

  const bookAuthorHandler = (auth: string) => {
    setBookAuthor(auth);
  };

  const sortBooks = (sortBy: string) => {
    sortingBookHandler(sortBy);
  };
  //save books
  const saveBookHandler = () => {
    if (
      bookName === '' ||
      bookAuthor === '' ||
      bookPublisher === '' ||
      bookYear === ''
    ) {
      return;
    } else {
      //id может выдать одинаковый сделано для теста
      let id = Math.floor(Math.random() * 20 + 1);
      const newBook: Book = {
        id,
        bookAuthor,
        title: bookName,
        publisher: bookPublisher,
        year: Number(bookYear),
        authorId: id,
      };

      setBooks(prev => [newBook, ...prev]);
    }
    setBookName('');
    setBookAuthor('');
    setBookPublisher('');
    setBookYear('');
  };
  //author dropdown list
  useEffect(() => {
    const sortItems = author?.map(item => {
      return `${item.firstName} ${item.lastName} ${item.middleName}`;
    });
    setDropDownList(sortItems);
  }, [author]);

  return (
    <SafeAreaView style={styles.root}>
      <Container>
        <View>
          {/* Inputs */}
          <View style={styles.data}>
            <Text>Введите данные Книги</Text>
            <SelectDropdown
              data={dropDownList}
              onSelect={selectedItem => {
                bookAuthorHandler(selectedItem);
              }}
              defaultButtonText="Автор"
              dropdownStyle={styles.dropDownList}
              buttonStyle={styles.dropDown}
              buttonTextStyle={styles.dropDownText}
              rowTextStyle={styles.dropDownText}
            />
            <Input
              value={bookName}
              placeholder="Название"
              setAuthorData={setBookName}
            />
            <Input
              value={bookPublisher}
              placeholder="Издатель"
              setAuthorData={setBookPublisher}
            />
            <Input
              value={bookYear}
              placeholder="Год"
              setAuthorData={setBookYear}
              keyboard
            />
          </View>
          {/* Button component */}
          <Button onPress={saveBookHandler}>Добавить</Button>
        </View>
        {/* sort Dropdown */}
        <SelectDropdown
          data={sorting}
          onSelect={selectedItem => {
            sortBooks(selectedItem);
          }}
          defaultButtonText="по id"
          dropdownStyle={styles.dropDownList}
          buttonStyle={styles.dropDown}
          buttonTextStyle={styles.dropDownText}
          rowTextStyle={styles.dropDownText}
        />

        <FlatList
          data={books || []}
          renderItem={({item}) => {
            return <Card item={item} booksCard />;
          }}
        />
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backGround,
  },
  data: {
    marginBottom: 10,
  },
  dropDown: {
    width: '100%',
    marginTop: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 10,
    padding: 6,
  },
  dropDownList: {
    borderRadius: 10,
    fontSize: 10,
  },
  dropDownText: {
    fontSize: 14,
  },
});

export default BooksScreen;
