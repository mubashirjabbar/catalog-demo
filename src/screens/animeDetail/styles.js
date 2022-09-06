// Packages
import {StyleSheet} from 'react-native';

// Local
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageView: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonView: {
    flex: 0.06,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.borderGrey,
  },
  imageStyle: {
    height: '90%',
    width: '90%',
    borderRadius: 10,
  },
  commonText: {
    color: colors.black,
    fontSize: 15,
  },
});

export default styles;
