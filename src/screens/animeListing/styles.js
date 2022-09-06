// Packages
import {StyleSheet} from 'react-native';

// Local
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchView: {
    flex: 0.1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainTitleStyle: {
    marginTop: 10,
    flex: 0.05,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  flatlist: {
    flex: 0.78,
    backgroundColor: colors.borderGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notDataFound: {
    flex: 0.78,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabs: {
    flex: 0.07,
    backgroundColor: colors.primaryGreen,
    flexDirection: 'row',
  },
  commonViewStyle: {
    height: '100%',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
  },

  textinputStyle: {
    height: 50,
    width: '95%',
    borderRadius: 5,
    borderBottomWidth: 0.5,
    borderColor: colors.primaryGreen,
    paddingLeft: 10,
    fontSize: 15,
    color: colors.black,
  },
  iconStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: 20,
    color: colors.primaryGreen,
  },
  bottomTextStyle: {
    fontSize: 17,
  },
});

export default styles;
