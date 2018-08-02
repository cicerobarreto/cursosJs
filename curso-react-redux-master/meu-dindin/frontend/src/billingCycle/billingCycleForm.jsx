import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from '../billingCycle/billingCycleActions'

class BillingCycleForm extends Component {

    render(){

        return (
            <form role='form'>
                <div className='box-body'>

                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }

}

export default BillingCycleForm