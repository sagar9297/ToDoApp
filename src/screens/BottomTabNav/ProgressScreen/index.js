import React from 'react';
import {View, Text} from 'react-native';
import Screen from '../../../components/Screen';

import styles from './style';

const Progress = props => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>This is progress screen</Text>
      </View>
    </Screen>
  );
};

export default Progress;
