import React, { useContext, useReducer, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import AuthUser from "../components/AuthUser";
import { BiUser, BiLockAlt } from "react-icons/bi";
import Toast from 'react-native-toast-message';

function SignInScreen({navigation}) {
    const [ username, setUsername ] = useState("");
    const [password, setPassword] = useState("");
    const { http, setTokenSignIn } = AuthUser();
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const successToast = (message) => {
      Toast.show({
        type: 'success',
        text1: "Successful",
        text2: message
      });
    }

    const errorToast = (message) => {
      Toast.show({
        type: 'error',
        text1: "Error Occurred",
        text2: message
      });
    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const payload = {
            username: username,
            password: password,
          };
      
          try {
            const response = await http.post(`/login`, payload);
            setTokenSignIn(response.data.user, response.data.access_token);
            successToast("Login Successful");
            setTimeout(() => {
              forceUpdate();
              navigation.navigate("Home");
           }, 1000);
          } catch (error) {
            console.log(error);
            errorToast("Username or Password fail");
          }
    }
  return (
    <View style={styles.container}>
    <Toast />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <BiUser />
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(username) => setUsername(username)}
          />
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <BiLockAlt />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            secureTextEntry="true"
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Sign In"
            color="transparent"
            style={{ flexDirection: "row" }}
            accessibilityLabel="Learn more about this purple button"
            onPress={handleSubmitLogin}
          />
        </View>
      </View>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff1d53",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#ff1d53",
    borderRadius: 6,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
