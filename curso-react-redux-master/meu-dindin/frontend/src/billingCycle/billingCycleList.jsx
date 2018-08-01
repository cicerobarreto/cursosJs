import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from '../billingCycle/billingCycleActions'



class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>                            
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleList)