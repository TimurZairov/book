import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../theme/colors';
import Container from '../../component/Container';
import Input from '../../component/Input';
import Button from '../../component/Button';

import {AppContext} from '../../context/Context';

const EditScreen = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const {
    id,
    firstName,
    lastName,
    middleName,
    birthDate,
    bookAuthor,
    publisher,
    title,
    year,
    authorId,
  } = (router?.params?.author || router?.params?.book) ?? {};

  const [editedName, setEditedName] = useState(firstName);
  const [editedLastName, setEditedLastName] = useState(lastName);
  const [editedMiddleName, setEditedMiddleName] = useState(middleName);
  const [editedDateBirth, setEditedDateBirth] = useState(birthDate);
  const [editedBookAuthor, setEditedBookAuthor] = useState(bookAuthor);
  const [editedPublisher, setEditedPublisher] = useState(publisher);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedYear, setEditedYear] = useState(year);

  const {setAuthor, author, books, setBooks} = useContext(AppContext);

  const saveAuthorHandler = () => {
    const edited = {
      id,
      firstName: editedName,
      lastName: editedLastName,
      middleName: editedMiddleName,
      birthDate: editedDateBirth,
    };

    if (author) {
      let authorEdit = author.filter(aut => aut.id !== id);
      setAuthor([edited, ...authorEdit]);
      navigation.goBack();
    }
  };

  const savaBookHandler = () => {
    const edited = {
      id,
      bookAuthor: editedBookAuthor,
      publisher: editedPublisher,
      title: editedTitle,
      year: editedYear,
      authorId,
    };
    if (books) {
      let editedBook = books.filter(b => b.id !== id);
      setBooks([edited, ...editedBook]);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.edit}>
      <Container>
        <View>
          <Text>Редактировать</Text>
          <Input
            value={editedName || editedBookAuthor}
            setAuthorData={firstName ? setEditedName : setEditedBookAuthor}
          />
          <Input
            value={editedLastName || editedPublisher}
            setAuthorData={firstName ? setEditedLastName : setEditedPublisher}
          />
          <Input
            value={editedMiddleName || editedTitle}
            setAuthorData={firstName ? setEditedMiddleName : setEditedTitle}
          />
          <Input
            value={editedDateBirth || editedYear.toString()}
            setAuthorData={firstName ? setEditedDateBirth : setEditedYear}
          />
        </View>
        <View style={styles.btn}>
          <Button onPress={() => navigation.goBack()}>Назад</Button>
          <Button onPress={firstName ? saveAuthorHandler : savaBookHandler}>
            Сохранить
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  edit: {
    flex: 1,
    backgroundColor: colors.backGround,
  },
  btn: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default EditScreen;
