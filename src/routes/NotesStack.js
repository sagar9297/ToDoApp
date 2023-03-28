import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screens from '../screens';
import routes from './routes';

const Notes = createNativeStackNavigator();

const NotesStack = () => {
  return (
    <Notes.Navigator screenOptions={{headerShown: false}}>
      <Notes.Screen
        name={routes.NOTES}
        component={Screens.BottomTabNav.NotesStack.NotesScreen}
      />
      <Notes.Screen
        name={routes.ADDNOTES}
        component={Screens.BottomTabNav.NotesStack.AddNotesScreen}
      />
    </Notes.Navigator>
  );
};

export default NotesStack;
