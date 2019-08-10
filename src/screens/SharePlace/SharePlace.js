import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {connect} from "react-redux";

import PlacesInput from "../../components/PlaceInput/PlaceInput";
import {addPlace} from "../../store/actions/index";

class SharePlaceScreen extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = (event) => {
        if(event.type === "NavBarButtonPress"){
            if (event.id === "sideDrawerButtonToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }



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