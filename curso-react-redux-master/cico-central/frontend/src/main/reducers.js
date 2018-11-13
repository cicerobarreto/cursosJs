import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastsReducer} from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    form: formReducer,
    toastr: toastsReducer
})

export default rootReducer