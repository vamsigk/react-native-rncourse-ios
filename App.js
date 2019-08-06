/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';


import ListItem from './src/components/ListItem/ListItem';


export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    });
  };

  placeAddHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.setState((prevState) => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    });
  };


  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place}/>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.placeName} 
            style={styles.placeInput}
            onChangeText={this.placeNameChangeHandler}
            placeholder="An Awesome Place"
            ></TextInput>
          <Button style={styles.placeButton} title="Add Place" onPress={this.placeAddHandler}/>
        </View>
        <View>          
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }

});
