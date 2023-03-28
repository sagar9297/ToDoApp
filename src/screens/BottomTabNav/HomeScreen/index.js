import React from 'react';
import {View, Text} from 'react-native';
import Screen from '../../../components/Screen';

import styles from './style';

const Home = props => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </Screen>
  );
};

export default Home;
