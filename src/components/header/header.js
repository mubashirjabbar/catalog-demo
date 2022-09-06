// Packages
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';

// Local
import colors from '../../assets/colors';
import styles from './styles';

const Header = props => {
  return (
    <>
      <View style={styles.headerView}>
        <View style={styles.leftIcon}>
          {props?.showLeftIcon && (
            <Pressable onPress={props?.onPressLeft}>
              <Image style={styles.iconStyle} source={props?.leftIcon} />
            </Pressable>
          )}
        </View>
        <View style={styles.middleText}>
          <Text adjustsFontSizeToFit style={styles.headerTextStyle}>
            {props?.titleHeader}
          </Text>
        </View>
        {props?.showRightIcon && (
          <View style={styles.rightIcon}>
            <Pressable onPress={props?.onPressRight}>
              <Image
                style={[
                  styles.iconStyle,
                  {tintColor: props?.showRedIcon ? colors.red : colors.white},
                ]}
                source={props?.rightIcon}
              />
            </Pressable>
          </View>
        )}
      </View>
    </>
  );
};

export default Header;
