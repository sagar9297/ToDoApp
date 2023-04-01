import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../../constants/customThemeColors';

const styles = StyleSheet.create({
  btnTxt: {
    fontSize: vs(12),
  },
  button: {
    position: 'absolute',
    bottom: vs(40),
    right: s(15),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: vs(20),
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
  fieldName: {
    marginVertical: vs(5),
    marginLeft: vs(20),
  },
  header: {
    fontWeight: 'bold',
    fontSize: vs(15),
    color: colors.black,
  },
  heading: {
    fontSize: vs(30),
    textAlign: 'center',
    marginBottom: vs(10),
    marginTop: vs(32),
    color: 'black',
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: s(20),
    marginTop: vs(10),
  },
  iconContainer: {
    width: '10%',
    alignItems: 'center',
  },
  image: {
    height: vs(30),
    width: vs(30),
    borderRadius: 3,
  },
  imageContainer: {
    height: vs(30),
    width: vs(30),
    borderRadius: 3,
    overflow: 'hidden',
  },
  inputButton: {
    width: '45%',
    elevation: 5,
  },
  innerView: {
    backgroundColor: colors.white,
    height: '100%',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
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
  outerView: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000000cc',
  },
  sdText: {
    marginLeft: s(10),
    fontWeight: '700',
    color: colors.black,
  },
  searchBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#06A15D',
    borderWidth: 0,
  },
  shareAndDelete: {
    flexDirection: 'row',
    padding: vs(5),
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
  textInput: {
    padding: 5,
    fontSize: vs(14),
  },
  textInputContainer: {
    borderRadius: 5,
  },
  title: {
    fontSize: vs(15),
    color: colors.black,
    fontWeight: '700',
  },
});

export default styles;
