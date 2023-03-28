import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {ms} from 'react-native-size-matters';
import colors from '../../constants/customThemeColors';
import styles from './style';

const CustomHeader = ({
  headerTitle = 'Header',
  onLeftIconPress,
  onRightIconPress,
  rightIcon = 'bell',
  imageUrl = 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
  titleStyle,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={
          onRightIconPress
            ? styles.contentContainer
            : [styles.contentContainer, {justifyContent: 'flex-start'}]
        }>
        {onLeftIconPress && (
          <TouchableOpacity
            onPress={onLeftIconPress}
            style={styles.imageContainer}>
            <Image source={{uri: imageUrl}} style={styles.image} />
          </TouchableOpacity>
        )}
        <Text style={[styles.textStyle, titleStyle]}>{headerTitle}</Text>
        {onRightIconPress && (
          <>
            <Feather
              name={rightIcon}
              size={ms(20)}
              color={colors.gray}
              onPress={onRightIconPress}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
