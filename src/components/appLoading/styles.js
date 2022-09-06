import {StyleSheet} from 'react-native';

import colors from '../../assets/colors';

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 14,
    fontWeight: '200',
    color: '#030031',
    opacity: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: '#00000070',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerView: {
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 25,
  },
});

export default styles;
