import React, { createContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./screens/MainTabScreen";
import { DrawerContent } from "./screens/DrawerContent";
import AsyncStorage from "@react-native-community/async-storage";
const Drawer = createDrawerNavigator();
export const UserContext = createContext();
export const TokenContext = createContext();
export default function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
 useEffect(() => {
  try {
    AsyncStorage.getItem('user').then((value) => 
    {
      if (value !== null) { 
        setUser(JSON.parse(value));
      }
    }
    
    );
    AsyncStorage.getItem('token').then((value) => 
    {
      if (value !== null) { 
        setToken(value);
      }
    }
    
    );
  } catch(e){
    return false;
  }
 },[])
  return (
    <UserContext.Provider value={[user, setUser]}>
    <TokenContext.Provider value={[token, setToken]}>
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          headerShown: false,
          headerTransparent: true
        }}
        drawerContent={props => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </TokenContext.Provider>
    </UserContext.Provider>
  );
}
