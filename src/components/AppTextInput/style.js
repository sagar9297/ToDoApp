import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../constants/customThemeColors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomColor: '#06A15D',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginLeft: s(15),
  },
  rightIcon: {
    marginRight: s(25),
  },
  text: {
    width: '95%',
    marginLeft: s(10),
    color: colors.black,
    fontWeight: '700',
    fontSize: vs(15),
  },
});

export default styles;
