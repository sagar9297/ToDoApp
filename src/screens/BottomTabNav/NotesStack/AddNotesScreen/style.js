import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../../constants/customThemeColors';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: vs(40),
    right: s(15),
  },
  contentContainer: {
    marginTop: vs(15),
    paddingBottom: ms(50),
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  header: {
    fontWeight: 'bold',
    fontSize: vs(15),
    color: colors.black,
  },
  iconContainer: {
    width: '10%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    height: vs(30),
    width: vs(30),
    borderRadius: 3,
    overflow: 'hidden',
  },
  listContainer: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: colors.white,
    elevation: 5,
    paddingVertical: vs(15),
    paddingHorizontal: vs(10),
    margin: vs(10),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sdText: {
    marginLeft: s(10),
    fontWeight: '700',
    color: colors.black,
  },
  shareAndDelete: {
    flexDirection: 'row',
    padding: vs(10),
    alignItems: 'center',
    margin: vs(15),
  },
  subTitle: {
    fontSize: vs(11),
    marginTop: vs(3),
  },
  textContainer: {
    width: '75%',
  },
});

export default styles;
