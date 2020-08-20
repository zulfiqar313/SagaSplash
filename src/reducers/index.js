import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { imagesReducer } from './imagesReducer';
import { pageReducer } from './pageReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
});

export default rootReducer;
