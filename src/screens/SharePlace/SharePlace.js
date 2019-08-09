import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {connect} from "react-redux";

import PlacesInput from "../../components/PlaceInput/PlaceInput";
import {addPlace} from "../../store/actions/index";

class SharePlaceScreen extends Component {

    placeAddedHandler = (placeName) => {
        this.props.onAddPlace(placeName);
    }

    render() {
        return (
            <View style={StyleSheet.sharePlaceView}>
                    <PlacesInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sharePlaceView: {
        alignItems: "center",
        paddingTop: 30
    }
});


const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);