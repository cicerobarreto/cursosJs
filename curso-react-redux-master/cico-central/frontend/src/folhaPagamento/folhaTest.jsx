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
                this.setState({ selectedFiles: e.target.files });
              break;
            default:
                this.setState({ [e.target.name]: e.target.value });
        }
        
    }

    onSubmit(e) {
       
        e.preventDefault();
        const { selectedFiles } = this.state;
        let formData = new FormData();
        
        formData.append('selectedFile', selectedFiles[0]);
        
        axios.post(`${BASE_URL}`, formData)
            .then(resp => {
                this.setState({resultado: resp.data})
                toastr.success('Sucesso', resp)                
            })
            .catch(e => {
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
                                <input type="file" id="file" onChange={e => this.onchange(e)}/>
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