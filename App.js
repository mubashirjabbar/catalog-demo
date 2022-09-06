// Packages
import {LogBox, StatusBar, Platform, UIManager} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';

// Local
import store from './src/redux/store/store';
import RootStack from './src/navigation/Rootstack';

// For LayoutAnimation
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <>
      <Provider store={store}>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={'dark-content'}
          showHideTransition={'fade'}
        />

        <RootStack />
      </Provider>
    </>
  );
};

export default App;
