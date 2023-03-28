import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import routes from './routes';
import Screens from '../screens';
import CustomHeader from '../components/CustomHeader';
import colors from '../constants/customThemeColors';
import {vs} from 'react-native-size-matters';

import NotesStack from './NotesStack';

//icon names: home, note-text-outline, trending-up,account-supervisor

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const handleLeftImg = () => {
    console.log('====================================');
    console.log('Left Image pressed');
    console.log('====================================');
  };

  const handleRightIcon = () => {
    console.log('====================================');
    console.log('Right icon pressed');
    console.log('====================================');
  };

  const TabIcons = ({name, color}) => (
    <Icon name={name} size={25} color={color} />
  );

  const TabButton = props => {
    const {onPress, iconName, accessibilityState, tabName} = props;

    const focused = accessibilityState.selected;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.tabContainer}>
          <TabIcons
            name={iconName}
            color={focused ? colors.primary : colors.gray}
          />
          <Text
            style={{
              fontSize: 10,
              color: focused ? colors.primary : colors.gray,
            }}>
            {tabName}
          </Text>
          {focused && <View style={styles.dot}></View>}
          {focused && <View style={styles.dot2}></View>}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 50,
          borderTopLeftRadius: 17,
          borderTopRightRadius: 17,
        },
      }}>
      <Tab.Screen
        name={routes.HOME}
        component={Screens.BottomTabNav.HomeScreen}
        options={({navigation, route}) => ({
          header: () => (
            <CustomHeader
              headerTitle="home"
              onLeftIconPress={handleLeftImg}
              onRightIconPress={handleRightIcon}
            />
          ),
          tabBarButton: props => (
            <TabButton {...props} iconName="home-outline" tabName="Home" />
          ),
        })}
      />
      <Tab.Screen
        name={'NotesStack'}
        component={NotesStack}
        options={({navigation, route}) => ({
          header: () => (
            <CustomHeader
              headerTitle="notes"
              onLeftIconPress={handleLeftImg}
              onRightIconPress={handleRightIcon}
            />
          ),

          tabBarButton: props => (
            <TabButton
              {...props}
              iconName="note-text-outline"
              tabName="Notes"
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.PROGRESS}
        component={Screens.BottomTabNav.ProgressScreen}
        options={({navigation, route}) => ({
          header: () => (
            <CustomHeader
              headerTitle="progress"
              onLeftIconPress={handleLeftImg}
              onRightIconPress={handleRightIcon}
            />
          ),

          tabBarButton: props => (
            <TabButton {...props} iconName="trending-up" tabName="Progress" />
          ),
        })}
      />
      <Tab.Screen
        name={routes.SUPPORT}
        component={Screens.BottomTabNav.SupportScreen}
        options={({navigation, route}) => ({
          header: () => (
            <CustomHeader
              headerTitle="support"
              onLeftIconPress={handleLeftImg}
              onRightIconPress={handleRightIcon}
            />
          ),

          tabBarButton: props => (
            <TabButton
              {...props}
              iconName="account-supervisor"
              tabName="Support"
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: vs(7),
    height: vs(7),
    borderRadius: 10,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: -12,
  },
  dot2: {
    width: vs(7),
    height: vs(7),
    borderRadius: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 0.7,
    position: 'absolute',
    top: -4,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTab;
