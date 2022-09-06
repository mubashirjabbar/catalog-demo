// Packages
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';

// Local
import images from '../../assets/images';
import styles from './styles';

const Splash = props => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DrawerScreens');
    }, 1500);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageStyle} source={images.catelogLogo} />
      <Text style={styles.textStyle}>{'Catalog'}</Text>
    </View>
  );
};

export default Splash;
