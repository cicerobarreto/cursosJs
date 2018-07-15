import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageheader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todo'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChance = this.handleChance.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    refresh(){
        Axios.get(`${URL}?sort=-createdAt`)
            .then( resp => this.setState({...this.state, list: resp.data, description:''}))
    }

    handleChance(e) {
        this.setState({ ...this.state, description: e.target.value })

    }

    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description })
            .then(resp => this.refresh())

    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    handleMarkAsDone(todo){
        Axios.put(`${URL}/${todo._id}`,{...todo, done:true})
            .then(resp => this.refresh())
    }

    handleMarkAsPending(todo){
        Axios.put(`${URL}/${todo._id}`,{...todo, done:false})
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd}
                    handleChance={this.handleChance}
                    description={this.state.description} />
                <TodoList list={this.state.list}
                          handleRemove={this.handleRemove}
                          handleMarkAsDone={this.handleMarkAsDone}
                          handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}