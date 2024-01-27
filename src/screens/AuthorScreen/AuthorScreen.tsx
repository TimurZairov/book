import React, {useContext, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import {SafeAreaView} from 'react-native-safe-area-context';
import Container from '../../component/Container';
import Input from '../../component/Input';
import {colors} from '../../theme/colors';
import Button from '../../component/Button';

import Card from '../../component/Card';

//context
import {AppContext} from '../../context/Context';
//dropdown array
const sorting = ['по имени', 'по фамилии', 'по отчеству', 'по id'];

const AuthorScreen = () => {
  //state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const {author, setAuthor, sortingHandler} = useContext(AppContext);

  // submit author
  const submitHandler = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      middleName === '' ||
      birthDate === ''
    ) {
      return;
    } else {
      let id = Math.floor(Math.random() * 20 + 1);
      const newAuthor = {
        id,
        firstName,
        lastName,
        middleName,
        birthDate,
      };
      setAuthor(prevState => [newAuthor, ...prevState]);
    }
  };
  //sort By
  const sortHandler = (sortBy: string) => {
    sortingHandler(sortBy);
  };

  return (
    <SafeAreaView style={styles.root}>
      <Container>
        <View>
          {/* Inputs */}
          <View style={styles.data}>
            <Text>Введите данные Автора</Text>
            <Input placeholder="Имя" setAuthorData={setFirstName} />
            <Input placeholder="Фамилия" setAuthorData={setLastName} />
            <Input placeholder="Отчество" setAuthorData={setMiddleName} />
            <Input placeholder="Дата рождения" setAuthorData={setBirthDate} />
          </View>
          {/* Button component */}
          <Button onPress={submitHandler}>Добавить</Button>
        </View>
        <SelectDropdown
          data={sorting}
          onSelect={selectedItem => {
            sortHandler(selectedItem);
          }}
          defaultButtonText="Сортировка"
          dropdownStyle={styles.dropDownList}
          buttonStyle={styles.dropDown}
          buttonTextStyle={styles.dropDownText}
          defaultValueByIndex={3}
          rowTextStyle={styles.dropDownText}
        />
        <FlatList
          data={author}
          renderItem={({item}) => {
            return <Card item={item} />;
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
  },
  dropDownList: {
    borderRadius: 10,
    fontSize: 10,
  },
  dropDownText: {
    fontSize: 14,
  },
});

export default AuthorScreen;
