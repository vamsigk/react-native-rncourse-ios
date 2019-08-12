import React, { Component } from 'react';
import {View, Text, Button, StyleSheet, TextInput } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

import startTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {

    loginHandler = () => {
        startTabs();
    }


    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Email Address" style={styles.input}/>
                    <DefaultInput placeholder="Password" style={styles.input}/>
                    <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                </View>
                <Button title="Sign Up" onPress={this.loginHandler}/>
                <Text>Please switch to login, if you already have an account.</Text>
                <Button title ="Switch to login"/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginContainer: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee"
    }
});

export default AuthScreen;