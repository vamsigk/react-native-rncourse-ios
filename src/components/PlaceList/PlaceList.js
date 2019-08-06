import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import ListItem from '../ListItem/ListItem'


const placeList = (props) => {

    return (

        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={({item}) => <ListItem key={item.key}
                                    placeName={item.value}
                                    displayImage={item.image} 
                                    onItemPressed={() => props.onItemDeleted(item.key)}/>}
            keyExtractor={item => item.key.toString()}                        
        />
        
    );
};


const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default placeList;