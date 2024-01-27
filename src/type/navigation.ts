import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Author, Book} from './types';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

export type TabParamList = {
  Author: NavigatorScreenParams<StackNavigationAuthorParamList>;
  Books: NavigatorScreenParams<StackNavigationBookParamList>;
};

export type StackNavigationAuthorParamList = {
  AuthorScreen: undefined;
  Edit: {
    author: Author;
  };
};

export type StackNavigationBookParamList = {
  BookScreen: undefined;
  Edit: {
    book: Book;
  };
};

export type StackCardProps = NativeStackNavigationProp<
  StackNavigationAuthorParamList,
  'Edit'
>;

export type EditProps = NativeStackScreenProps<
  StackNavigationAuthorParamList,
  'AuthorScreen',
  'Edit'
>;

export type EditScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Author'>,
  StackScreenProps<StackNavigationAuthorParamList>
>;
