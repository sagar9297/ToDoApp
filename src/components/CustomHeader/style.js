import {StyleSheet, StatusBar} from 'react-native';
import {ms, vs} from 'react-native-size-matters';
import colors from '../../constants/customThemeColors';

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    right: 10,
    top: vs(10),
    backgroundColor: 'red',
    borderRadius: 100,
    height: ms(15),
    width: ms(15),
    textAlign: 'center',
    fontSize: 9,
  },
  container: {
    backgroundColor: colors.white,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ms(15),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: vs(40),
    height: vs(40),
    borderRadius: 50,
    overflow: 'hidden',
  },
  textStyle: {
    textAlign: 'center',
    flex: 1,
    color: colors.gray,
    fontWeight: '700',
    fontSize: 20,
  },
});

export default styles;
