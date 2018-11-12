import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import FolhaTest from '../folhaPagamento/folhaTest'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={FolhaTest} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Route path='/testFolha' component={FolhaTest} />
        <Redirect from='*' to='/' />
    </Router>
)