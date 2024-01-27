import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../theme/colors';

interface TableCardProps {
  id?: number;
  firstName?: string | undefined;
  lastName?: string | undefined;
  middleName?: string | undefined;
  birthDate?: string | undefined;
  authorId?: string | undefined;
  bookAuthor?: string | undefined;
  title?: string | undefined;
  publisher?: string | undefined;
  year?: string | undefined;
  booksCard?: boolean;
}

const TableCard = ({
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
  booksCard,
}: TableCardProps) => {
  return (
    <View style={styles.table}>
      <View style={styles.tableName}>
        <Text>ID</Text>
        {!booksCard ? (
          <>
            <Text>Имя</Text>
            <Text>Фамилия</Text>
            <Text>Отчество</Text>
            <Text>Дата рождения</Text>
          </>
        ) : (
          <>
            <Text>Автор</Text>
            <Text>Название</Text>
            <Text>Издатель</Text>
            <Text>Год</Text>
          </>
        )}
      </View>
      {!booksCard ? (
        <View>
          <Text>{id}</Text>
          <Text>{firstName}</Text>
          <Text>{lastName}</Text>
          <Text>{middleName}</Text>
          <Text>{birthDate}</Text>
        </View>
      ) : (
        <View>
          <Text>{id}</Text>
          <Text>{bookAuthor}</Text>
          <Text>{title}</Text>
          <Text>{publisher}</Text>
          <Text>{year}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.lightBlue,
    borderRadius: 10,
  },
  tableName: {},
});

export default TableCard;
