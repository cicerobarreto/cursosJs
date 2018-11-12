const INITIAL_STATE = {resultado: "Processamento..."}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PROCESSAMENTO_SUMMARY_FETCHED':
            return {...state, resultado: action.payload}
        default:
            return state
    }
}