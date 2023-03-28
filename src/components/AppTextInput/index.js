import React from 'react';
import {View, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';
import colors from '../../constants/customThemeColors';

const AppTextInput = ({
  leftIcon,
  rightIcon,
  width = '95%',
  containerStyle,
  leftIconStyle,
  rightIconStyle,
  leftIconSize = 20,
  rightIconSize = 20,
  onLeftIconPress,
  onRightIconPress,
  leftIconColor = colors.black,
  rightIconColor = colors.black,
  textInputStyle,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, {width}, containerStyle]}>
      <View style={styles.leftContainer}>
        {leftIcon && (
          <Feather
            name={leftIcon}
            size={leftIconSize}
            color={leftIconColor}
            onPres={onLeftIconPress}
            style={[styles.leftIcon, leftIconStyle]}
          />
        )}
        <TextInput
          style={
            leftIcon || rightIcon
              ? [styles.text, textInputStyle, {width: '80%'}]
              : [styles.text, textInputStyle]
          }
          placeholderTextColor={colors.gray}
          {...otherProps}
        />
      </View>
      {rightIcon && (
        <MaterialCommunityIcons
          name={rightIcon}
          size={rightIconSize}
          color={rightIconColor}
          onPress={onRightIconPress}
          style={[styles.rightIcon, rightIconStyle]}
        />
      )}
    </View>
  );
};

export default AppTextInput;
