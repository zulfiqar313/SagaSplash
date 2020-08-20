import { IMAGES } from '../constants/index';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import fetchImages from '../api/index';
import { setImages, setError } from '../actions/index';
const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
