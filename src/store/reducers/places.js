import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'; 

const initialState = {
    places: [],
    selectedPlace: null
};

const placesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({ 
                    key: Math.floor(Math.random() * 100), 
                    value: action.placename,
                    image: {
                      uri: "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg"
                    }
                  })
            };
        case DELETE_PLACE:
            return{
                ...state,
                places: state.places.filter((x) => {
                    return x.key !== state.selectedPlace.key;
                  }),
                  selectedPlace: null
            }; 
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find((x) => {
                    return x.key === action.placeKey;
                  })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }       
        default:
            return state;
    }
};

export default placesReducer;