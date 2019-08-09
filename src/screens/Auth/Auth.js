import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import startTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {

    loginHandler = () => {
        startTabs();
    }


    render() {
        return (
            <View style={styles.loginView}>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginView: {
        alignItems: "center",
        paddingTop: 30
    }
});

export default AuthScreen;