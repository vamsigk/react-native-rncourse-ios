import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';



import Icon from "react-native-vector-icons/Ionicons";

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <View style={styles.placeImageView}>
                <Image source={props.displayImage} style={styles.placeImage} />
            </View>
            <View style={styles.placeNameView}>
                <Text>
                    {props.placeName}
                </Text>
            </View>
            <View style={styles.placeIconView}>
            <Icon
                name="ios-arrow-forward"
                size={20}
            />
            </View>
        </View>
    </TouchableOpacity>
);



styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    placeNameView: {
        width: "60%"
    },
    placeImageView: {
        width: "30%"
    },
    placeIconView: {
        width: "10%"
    },
    placeImage: {
        height: 50,
        width: 50
    }
});

export default listItem;