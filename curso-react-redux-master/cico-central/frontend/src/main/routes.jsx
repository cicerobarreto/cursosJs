import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import FolhaTest from '../folhaPagamento/folhaTest'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={FolhaTest} />
        <Redirect from='*' to='/' />
    </Router>
)