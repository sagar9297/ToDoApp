import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {vs} from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

const AppIconButton = ({iconName = 'plus', onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Icon name={iconName} size={vs(17)} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default AppIconButton;
