import React, {Component}  from 'react';
import { View, StyleSheet, Button, Text, Image, TouchableOpacity } from 'react-native';

import {connect} from "react-redux";

import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from "../../store/actions/index";

class PlaceDetail extends Component  {

    placeDeleteHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.placeDetailContainer}>
                <View>
                    <Image source={this.props.selectedPlace.image} style={styles.placeDetailImage} />
                    <Text style={styles.palceNameView}>{this.props.selectedPlace.value} is an Awesome Place</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.placeDeleteHandler}>
                        <Icon size={30} name="ios-trash" color="red"/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        //flexDirection: "row",
        marginTop: 30,
        alignItems: "center"
    },
    placeDetailImage: {
        width: "100%",
        height: 200
    },
    palceNameView: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    placeDetailContainer: {
        marginTop: 40
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);