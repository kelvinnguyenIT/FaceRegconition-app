import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage"; 
export default function AuthUser() {

    const [token, setToken] = useState();
    const [user, setUser] = useState();
    
    const getToken = async() => {
        const userToken = await AsyncStorage.getItem('token');
        return userToken;
    }

    const getUser = async () => {
        const userString = await AsyncStorage.getItem('user');
        const userInfo = JSON.parse(userString);
        return userInfo;
    }

    const saveToken = (user, token) => {
        AsyncStorage.setItem('token', JSON.stringify(token));
        AsyncStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user)
    }

    const logout = () => {
        AsyncStorage.clear();
    }

    const http = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
        }
    });
    return {
        setTokenSignIn: saveToken,
        token,
        user,
        getToken,
        getUser,
        logout,
        http
    }
}
