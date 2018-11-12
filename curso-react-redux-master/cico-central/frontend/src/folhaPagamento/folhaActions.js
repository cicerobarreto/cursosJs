import axios from 'axios';
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3001/folhaProcessar'

export function processarTest(selectedFiles) {
    
    let formData = new FormData();
    
    formData.append('selectedFiles', selectedFiles);
    
    return dispatch => {
        axios.post(`${BASE_URL}`, selectedFiles)
            .then(resp => {
                console.log('sucesso');
                
                toastr.success('Sucesso', resp)
                dispatch()
            })
            .catch(e => {
                console.log(`Error: ${e}`);
                toastr.error('Erro', e)
            })
    }
}