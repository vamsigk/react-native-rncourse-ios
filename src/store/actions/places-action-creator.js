import {ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placename: placeName
    };
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    };
};