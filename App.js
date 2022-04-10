/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screen/Home';
import Tab01 from './src/screen/Tab01';
import Tab02 from './src/screen/Tab02';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator 
    
    // screenOptions={{ ,}}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, focused }) => {
        let iconName
        if (route.name == 'Tab01') {
          iconName = focused ? 'ios-options' : 'ios-list'
          return <Icon name={iconName} size={25} color={color}/>

        } else if (route.name == 'Tab02') {
          iconName = focused ? 'ios-options' : 'ios-list'
          return <Icon name={iconName} size={25} color={color} />

        }

      },
      headerShown: false 
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }}
    >
      <Tab.Screen name="Tab01" component={Tab01}  />
      <Tab.Screen name="Tab02" component={Tab02} />
    </Tab.Navigator>
  );
}


const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

const App = () => {

  
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="TabNav" component={TabNav} />
        </Drawer.Navigator>
     </NavigationContainer>  
  );
};

const styles = StyleSheet.create({
});

export default App;
