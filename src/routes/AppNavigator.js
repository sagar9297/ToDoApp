import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';

const AppNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;
