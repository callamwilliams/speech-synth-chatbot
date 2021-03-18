import { combineReducers } from 'redux';
import locationSlice from './locationSlice';

const rootReducer = combineReducers({
    position: locationSlice,
});

export default rootReducer;
