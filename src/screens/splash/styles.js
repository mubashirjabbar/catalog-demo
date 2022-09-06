import {StyleSheet} from 'react-native';

import colors from '../../assets/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  imageStyle: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    tintColor: colors.primaryGreen,
  },
  textStyle: {
    fontSize: 25,
    paddingTop: 15,
    color: colors.primaryGreen,
    paddingRight: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default styles;
