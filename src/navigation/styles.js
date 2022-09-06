// Packages
import {StyleSheet} from 'react-native';

// Local
import colors from '../assets/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerItemsContainer: {
    flex: 0.25,
    justifyContent: 'center',
  },
  drawerItemStyles: {
    height: '25%',
    backgroundColor: colors.dimGreen,
    justifyContent: 'center',
  },
  imageStyle: {
    height: '50%',
    width: '50%',
    borderRadius: 10,
    tintColor: colors.primaryGreen,
  },
  appText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.primaryGreen,
  },
  drawerItemLabelText: {
    fontSize: 15,
    color: colors.primaryGreen,
  },
  drawerItemImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.primaryGreen,
  },
});

export default styles;
