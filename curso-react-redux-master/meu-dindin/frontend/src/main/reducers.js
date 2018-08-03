import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastsReducer} from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dasboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycleReducer: BillingCycleReducer,
    form: formReducer,
    toastr: toastsReducer
})

export default rootReducer