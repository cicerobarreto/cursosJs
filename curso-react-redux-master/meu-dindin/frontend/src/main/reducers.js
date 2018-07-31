import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({summary: {credito: 100, debt: 50}})
})

export default rootReducer