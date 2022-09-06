// Packages
import {StyleSheet} from 'react-native';

// Local
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatlist: {
    flex: 1,
    backgroundColor: colors.borderGrey,
  },
  notDataFound: {
    flex: 0.78,

    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 20,
    color: colors.primaryGreen,
  },
});

export default styles;
