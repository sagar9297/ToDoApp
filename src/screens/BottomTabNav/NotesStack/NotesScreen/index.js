import React from 'react';
import {View, Text} from 'react-native';
import AppIconButton from '../../../../components/AppIconButton';
import Screen from '../../../../components/Screen';
import routes from '../../../../routes/routes';

import styles from './style';

const Notes = props => {
  const {navigation} = props;

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>no notes yet</Text>
        <Text style={styles.subTitle}>
          Journaling can have many benefits for both mental and physical health.
          It can be a helpful tool for managing stress, improving
          self-awareness, and processing emotions.
        </Text>
        <AppIconButton
          onPress={() => navigation.navigate(routes.ADDNOTES)}
          style={styles.button}
        />
      </View>
    </Screen>
  );
};

export default Notes;
