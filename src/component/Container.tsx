import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
});

export default Container;
