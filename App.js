/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';



export default class App extends Component {
  state = {
    places: []
  }


  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.concat({ key: Math.floor(Math.random() * 100), 
                                          value: placeName,
                                          image: {
                                            uri: "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg"
                                          } 
                                        })
      };
    });
  };

  onItemDeletedHandler = (key) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((x) => x.key !== key)
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemDeleted={this.onItemDeletedHandler }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 50
  }
});
