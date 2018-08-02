import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'

import DashboardReducer from '../dashboard/dasboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycleReducer: BillingCycleReducer,
    form: formReducer
})

export default rootReducer