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
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import placeImage from './src/assets/images/Empire-state-building.jpg';

//https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
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

  onItemDeletedHandler = () => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((x) => {
          return x.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    });
  }

  onItemSelectedHandler = (key) => {
    this.setState((prevState) => {
      return {
        selectedPlace: prevState.places.find((x) => {
          return x.key === key;
        })
        
      }
    });
  }

  onModalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} 
                      onModalClose={this.onModalCloseHandler} 
                      onItemDeleted={this.onItemDeletedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemSelected={this.onItemSelectedHandler}/>
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
