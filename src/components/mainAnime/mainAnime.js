// Packages
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';

// Local
import styles from './styles';

const MainAnime = props => {
  return (
    <>
      <Pressable style={styles.mainView} onPress={props?.onPressItem}>
        <View style={styles.mainImage}>
          <Image
            style={styles.leftImageStyle}
            source={{
              uri: props?.image,
            }}
          />
        </View>
        <View style={styles.mainTitle}>
          <Text adjustsFontSizeToFit style={styles.mainTitleText}>
            {props?.name}
          </Text>
        </View>

        <View style={styles.rating}>
          <Text
            adjustsFontSizeToFit
            style={[styles.commonTextStyle, {fontSize: 13}]}>
            {props?.rating}
          </Text>
        </View>

        <View style={styles.yearAndScore}>
          <Text adjustsFontSizeToFit style={styles.commonTextStyle}>
            {props?.score}
          </Text>
          <Text adjustsFontSizeToFit style={styles.commonTextStyle}>
            {props?.year}
          </Text>
        </View>
      </Pressable>
    </>
  );
};

export default MainAnime;
