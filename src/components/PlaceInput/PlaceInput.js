import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {

    state = {
        placeName: ''
    }

    placeNameChangeHandler = (val) => {
        this.setState({
            placeName: val
        });
    };

    placeAddHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {

        return(
            <View style={styles.inputContainer}>
            <TextInput value={this.state.placeName}
                style={styles.placeInput}
                onChangeText={this.placeNameChangeHandler}
                placeholder="An Awesome Place"
            ></TextInput>
            <Button style={styles.placeButton} title="Add Place" onPress={this.placeAddHandler} />
        </View>
        ); 
    }

}

styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});

export default PlaceInput;