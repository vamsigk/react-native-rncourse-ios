import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.findPlaceView}>
                    <PlaceList places={this.props.places}/>
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