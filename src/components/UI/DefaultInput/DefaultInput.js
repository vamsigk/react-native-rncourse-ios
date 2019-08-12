import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const defaultInput = (props) => (
    <TextInput
        {...props}
        style={[styles.inputText, props.style]}
        underlineColorAndroid="transparent"
    />
);


const styles = StyleSheet.create({
    inputText: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#bbb",
        margin: 10,
        padding: 10
    }
});


export default defaultInput;