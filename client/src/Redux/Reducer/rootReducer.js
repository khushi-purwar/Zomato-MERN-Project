import {combineReducers} from 'redux';

import restaurantReducer from './restaurant/restaurant.reducer';

const rootReducer = combineReducers({ restaurantReducer});
export default rootReducer;