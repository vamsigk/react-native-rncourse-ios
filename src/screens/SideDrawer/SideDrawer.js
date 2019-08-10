import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";


class SideDrawer extends Component {
    render() {
        return (
            <View style={[styles.sideDrawer, { width: Dimensions.get('window').width * 0.8 }]}>
                <Text>Side Drawer Component</Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    sideDrawer: {
        paddingTop: 25,
        backgroundColor: "grey",
        flex: 1
    }
});


export default SideDrawer;