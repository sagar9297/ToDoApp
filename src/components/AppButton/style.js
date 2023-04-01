import {StyleSheet} from 'react-native';

import colors from '../../constants/customThemeColors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 17,
    color: colors.white,
  },
});

export default styles;
