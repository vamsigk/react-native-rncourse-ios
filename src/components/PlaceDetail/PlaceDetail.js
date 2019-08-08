import React, { Component } from 'react';
import { Modal, View, StyleSheet, Button, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props) => {

    let modalContent = null;
    
    if (props.selectedPlace) {
        
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeDetailImage} />
                <Text style={styles.palceNameView}>{props.selectedPlace.value}</Text>
            </View>
        );
    }

    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide" style={styles.modalContainer}>
            <View>
                {modalContent}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={props.onItemDeleted} style={styles.deleteButton}>
                    <Icon size={30} name="ios-trash" color="red"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onModalClose} style={styles.modalCloseButton}>
                    <Icon size={30} name="ios-close-circle-outline"/>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        marginTop: 30
    },
    deleteButton: {
        width: "50%",
        alignItems: "center"
    },
    modalCloseButton: {
        width: "50%",
        alignItems: "center"
    },
    placeDetailImage: {
        width: "100%",
        height: 200
    },
    palceNameView: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    modalContainer: {
        marginTop: 40
    }
});

export default placeDetail;