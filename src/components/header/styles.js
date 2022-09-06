// Packages
import {StyleSheet} from 'react-native';

// Local
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  headerView: {
    height: 70,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    backgroundColor: colors.primaryGreen,
  },
  leftIcon: {
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  middleText: {
    height: '100%',
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  headerTextStyle: {
    fontSize: 20,
    color: colors.white,
  },
});

export default styles;
