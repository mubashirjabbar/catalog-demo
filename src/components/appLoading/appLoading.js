// Packages
import {ActivityIndicator, Dimensions, Modal, Text, View} from 'react-native';
import React from 'react';

// Local
import colors from '../../assets/colors';
import styles from './styles';
class AppLoading {
  renderLoading(visible) {
    return (
      <View>
        {visible ? (
          <Modal
            transparent={true}
            onRequestClose={() => null}
            visible={visible}>
            <View style={styles.mainView}>
              <View style={styles.innerView}>
                <ActivityIndicator size="large" color={colors.primaryGreen} />
                <Text style={styles.fontStyle}>{'Loading'}</Text>
              </View>
            </View>
          </Modal>
        ) : null}
      </View>
    );
  }
  getCalculated(percentage) {
    let deviceHeight = Dimensions.get('window').height;
    return (percentage * deviceHeight) / 100;
  }
  getWidthCalculated(percentage) {
    let deviceWidth = Dimensions.get('window').width;
    return (percentage * deviceWidth) / 100;
  }
}
export default new AppLoading();
