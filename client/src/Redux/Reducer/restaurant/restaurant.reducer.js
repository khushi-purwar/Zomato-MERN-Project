import { GET_RESTAURANT} from "./restaurant.type";

const INITIAL_STATE = {
    restaurants : [],
};

const restaurantReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case GET_RESTAURANT:
            return {
                ...state,
                selectedRestaurant: action.payload,
            }

        default:
            return {
                ...state,
            };
    }
}

export default restaurantReducer;