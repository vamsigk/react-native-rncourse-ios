import React  from 'react';
import { View, StyleSheet, Button, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props) => {
    return (
        <View style={styles.placeDetailContainer}>
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeDetailImage} />
                <Text style={styles.palceNameView}>{props.selectedPlace.value} is an Awesome Place</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={props.onItemDeleted}>
                    <Icon size={30} name="ios-trash" color="red"/>
                </TouchableOpacity>
            </View>
        </View>
    );
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

export default placeDetail;