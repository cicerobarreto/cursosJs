import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import TextareaAutosize from 'react-autosize-textarea';

import { processarTest } from './folhaActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'

class FolhaTest extends Component { 

    constructor() {
        super();
        this.state = {
          selectedFiles: '',
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
        this.props.processarTest(this.state.selectedFiles)
    }
    
    render(){
        //const {credit, debt} = this.props.summary
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
                            <TextareaAutosize rows={10} cols={200} readOnly={true} value={this.props.resultado}/>
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

FolhaTest = reduxForm({ form: 'folhaTest', destroyOnUnmount: false })(FolhaTest)

const mapStateToProps = state => ({resultado: state.folhaReducer.resultado})
const mapDispatchToProps = dispatch => bindActionCreators({processarTest}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FolhaTest)