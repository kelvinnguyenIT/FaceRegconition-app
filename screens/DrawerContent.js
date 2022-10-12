import React, { useContext, useReducer } from 'react';
import { StyleSheet, View } from "react-native";
import { Avatar,Title,Caption, Paragraph, Drawer, Text,TouchableRipple,Switch } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import AuthUser from '../components/AuthUser';
import { UserContext } from '../App';
import { TokenContext } from '../App';
import { BiLogOut,BiHome, BiUser, BiHeadphone, BiFile } from "react-icons/bi";
export function DrawerContent({props,navigation}) {
    const {logout} = AuthUser();
    const [user, setUser] = useContext(UserContext);
    const [token, setToken] = useContext(TokenContext);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const logoutUser = () => {
        if (token != undefined) {
          logout();
          setToken("");
          setUser({});
        }
        forceUpdate();
        navigation.navigate("Home");
      };

    return ( 
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../assets/faceAvatar.jpg')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={() => (
                                <BiHome />
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <BiFile />
                            )}
                            label="Articles"
                            onPress={() => {}}
                        />
                        {token ? 
                            <DrawerItem 
                            icon={() => (
                                <BiUser />
                            )}
                            label="Profile"
                            onPress={() => {navigation.navigate('Profile')}}
                        />
                        :
                        <DrawerItem 
                            icon={() => (
                                <BiUser />
                            )}
                            label="User"
                            onPress={() => {navigation.navigate('Login')}}
                        />
                        }
                        
                        
                        <DrawerItem 
                            icon={() => (
                                <BiHeadphone />
                            )}
                            label="Support"
                            onPress={() => {}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                <DrawerItem 
                icon={() => (
                    <BiLogOut />
                            )}
                label="Log Out"
                onPress={logoutUser}
                 />
            </Drawer.Section>
                    </View>
                </View>
            </DrawerContentScrollView>
            
        </View>
     );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });