import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";
import SignInScreen from "./SignInScreen";
import AsyncStorage from "@react-native-community/async-storage";
import AuthUser from "../components/AuthUser";
import { TokenContext } from "../App";
import ContactScreen from "./Contact";
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ContactStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function MainTabScreen(){
  const [token, setToken] = useContext(TokenContext);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
 
  return (
    
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: "#23293b",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-home"
            style={{
              fontSize: 26,
              color: focused ? "#ff1d53" : "#91949d",
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Contact"
      component={ContactStackScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: "#23293b",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-document-text"
            style={{
              fontSize: 26,
              color: focused ? "#ff1d53" : "#91949d",
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: "#23293b",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-headset"
            style={{
              fontSize: 26,
              color: focused ? "#ff1d53" : "#91949d",
            }}
          />
        ),
      }}
    />
    {
      token ? 
      <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: "#23293b",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-person"
            style={{
              fontSize: 26,
              color: focused ? "#ff1d53" : "#91949d",
            }}
          />
        ),
      }}
    />
    :
    <Tab.Screen
      name="Login"
      component={LoginStackScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: "#23293b",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-person"
            style={{
              fontSize: 26,
              color: focused ? "#ff1d53" : "#91949d",
            }}
          />
        ),
      }}
    />
    }
    
    
  </Tab.Navigator>
  )
};

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerLabel: () => null,
        title: null,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            color="black"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        drawerLabel: () => null,
        title: null,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            color="black"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const LoginStackScreen = ({ navigation }) => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="Login"
      component={SignInScreen}
      options={{
        drawerLabel: () => null,
        title: null,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            color="black"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </LoginStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        drawerLabel: () => null,
        title: null,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            color="black"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const ContactStackScreen = ({ navigation }) => (
  <ContactStack.Navigator>
    <ContactStack.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        drawerLabel: () => null,
        title: null,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            color="black"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </ContactStack.Navigator>
);