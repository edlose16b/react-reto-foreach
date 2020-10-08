import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import travels from './reducers/travels';
import transportations from './reducers/transportations';


const reducers = combineReducers({
    travels,
    transportations,
});


const store = createStore(reducers, applyMiddleware(thunk));


export default store;