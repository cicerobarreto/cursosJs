import React, { Component } from 'react'

import TextareaAutosize from 'react-autosize-textarea';
import axios from 'axios';
import { toastr } from 'react-redux-toastr'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3001/folhaProcessar'

class FolhaTest extends Component { 

    constructor() {
        super();
        this.state = {
          selectedFiles: [],
          resultado: 'Processamento...'
        };
    }

    onchange(e) {
        switch (e.target.id) {
            case 'file':
                let fd = new FormData()
                fd.append('files', e.target.files[0], 'files')
                this.setState({ selectedFiles: fd });
              break;
            default:
                this.setState({ [e.target.name]: e.target.value });
        }
        console.log(this.state.selectedFiles);
        
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.selectedFiles.length);
        
        axios.post(`${BASE_URL}`, {selectedFiles: this.state.selectedFiles})
            .then(resp => {
                this.setState({resultado: resp.data})
                toastr.success('Sucesso', resp)                
            })
            .catch(e => {
                console.log(`Error: ${e}`);
                toastr.error('Erro', e)
            })
    }
    
    render(){
        return (
            <div>
                <ContentHeader title='Teste da folha de Pagamento' small='Versão 1.0' />
                <Content>
                    <Row>
                    <form role='form' onSubmit={e => this.onSubmit(e)} >
                        
                        <div className='box-body'>
                            <div className='form-group'>
                                <label htmlFor="Arquivo">Selecione os arquivos</label>
                                <input type="file" id="file" multiple onChange={e => this.onchange(e)}/>
                            </div>
                            <TextareaAutosize rows={10} cols={200} readOnly={true} value={this.state.resultado}/>
                        </div>
                        
                        <div className='box-footer'>
                            <button type='submit' className={`btn btn-primary`}>Processar</button>
                            <button type='button' className='btn btn-default'
                                onClick={this.props.init}> Cancelar </button>
                        </div>
                    </form> 
                    </Row>
                </Content>
            </div>
        )
    }
}

export default FolhaTest