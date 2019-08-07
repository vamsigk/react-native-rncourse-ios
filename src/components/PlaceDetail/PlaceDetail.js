import React, { Component } from 'react';
import { Modal, View, StyleSheet, Button, Text, Image } from 'react-native';

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
                <View style={styles.deleteButton}>
                    <Button title="Delete" onPress={props.onItemDeleted} />
                </View>
                <View style={styles.modalCloseButton}>
                    <Button title="Close" onPress={props.onModalClose} />
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    deleteButton: {
        width: "50%"
    },
    modalCloseButton: {
        width: "50%"
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