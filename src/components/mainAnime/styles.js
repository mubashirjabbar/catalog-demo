// Packages
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Local
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  mainView: {
    height: hp(32),
    marginTop: wp(4),
    borderBottomColor: colors.lightGray,
    width: wp(45),
    backgroundColor: colors.white,
    borderRadius: 10,
    marginLeft: wp(2),
  },
  mainImage: {
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  rating: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  yearAndScore: {
    height: '20%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  leftImage: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleInfo: {
    height: '100%',
    width: '40%',
  },
  name: {
    height: '40%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  score: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
  },
  year: {
    height: '20%',
    width: '100%',
  },
  rightrating: {
    height: '100%',
    width: '30%',
  },
  favorite: {
    height: '24%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
  },

  leftImageStyle: {
    height: wp(20),
    width: wp(20),
    resizeMode: 'contain',
    borderRadius: wp(10),
  },
  favIconStyle: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  headerTextStyle: {
    fontSize: 20,
    color: colors.primaryGreen,
  },
  mainTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.primaryGreen,
    textAlign: 'center',
  },
  commonTextStyle: {
    fontSize: 15,
    color: colors.black,
  },
});

export default styles;
