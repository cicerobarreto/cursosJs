import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageheader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todo'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChance = this.handleChance.bind(this)
        this.refresh = this.refresh.bind(this)
        this.state = { description: '', list: [] }
        this.refresh()
    }

    refresh(){
        Axios.get(`${URL}?sort=-createdAt`)
            .then( resp => {
                this.setState({...this.state, list: resp.data})
            })
    }

    handleChance(e) {
        this.setState({ ...this.state, description: e.target.value })

    }

    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description })
            .then(resp => console.log(resp.statusText))
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd}
                    handleChance={this.handleChance}
                    description={this.state.description} />
                <TodoList />
            </div>
        )
    }
}