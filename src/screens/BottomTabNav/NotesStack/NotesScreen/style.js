import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';

import colors from '../../../../constants/customThemeColors';

const styles = StyleSheet.create({
  button: {
    marginTop: vs(25),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  subTitle: {
    width: '90%',
    marginTop: vs(10),
  },
});

export default styles;
