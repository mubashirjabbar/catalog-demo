// Packages

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {View, Image, Text} from 'react-native';

// Local
import AnimeListing from '../screens/animeListing/animeListing';
import AnimeDetails from '../screens/animeDetail/animeDetails';
import Favorites from '../screens/favorites/favorites';
import Splash from '../screens/splash/splash';
import images from '../assets/images';
import styles from './styles';


const RootStack = createStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}>
        <RootStack.Screen name="DrawerScreens" component={DrawerScreens} />
        <RootStack.Screen name="AnimeDetails" component={AnimeDetails} />
        <RootStack.Screen name="Splash" component={Splash} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

const DrawerScreens = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => CustomDrawerContent(props)}
      initialRouteName="AnimeListing">
      <Drawer.Screen name="AnimeListing" component={AnimeListing} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.image}>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={images.catelogLogo}
          />
        </View>
        <View style={styles.appName}>
          <Text style={styles.appText}>{'Catalog'}</Text>
        </View>

        <View style={styles.drawerItemsContainer}>
          <DrawerItem
            style={styles.drawerItemStyles}
            label={() => (
              <Text style={styles.drawerItemLabelText}>{'Anime Lising'}</Text>
            )}
            icon={() => (
              <Image source={images.listing} style={styles.drawerItemImage} />
            )}
            onPress={() => {
              navigation.navigate('AnimeListing', {isdrawer: true});
            }}
          />
          <DrawerItem
            style={styles.drawerItemStyles}
            label={() => (
              <Text style={styles.drawerItemLabelText}>{'Favorites'}</Text>
            )}
            icon={() => (
              <Image source={images.halfFav} style={styles.drawerItemImage} />
            )}
            onPress={() => navigation.navigate('Favorites')}
          />
        </View>
      </View>
    </>
  );
}

export default Stack;
