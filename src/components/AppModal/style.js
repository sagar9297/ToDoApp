import {StyleSheet, Platform} from 'react-native';
import {ms, vs, s} from 'react-native-size-matters';

import colors from '../../constants/customThemeColors';

const styles = StyleSheet.create({
  innerModalView: {
    backgroundColor: colors.white,
    height: '30%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  outerModalView: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: '#000000cc',
  },
});

export default styles;
