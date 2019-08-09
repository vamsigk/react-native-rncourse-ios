import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {

    itemSelectedHandler = (key) => {
        const placeSelected = this.props.places.find((place) => {
            return  key === place.key;
        });
        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: placeSelected.value,
            passProps: {
                selectedPlace: placeSelected
            }
        })
    }

    render() {
        return (
            <View style={StyleSheet.findPlaceView}>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    findPlaceView: {
        alignItems: "center",
        paddingTop: 30
    }
});


const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);