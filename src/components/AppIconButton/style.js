import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';

import colors from '../../constants/customThemeColors';

const styles = StyleSheet.create({
  container: {
    height: vs(60),
    width: vs(60),
    borderRadius: vs(50),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
