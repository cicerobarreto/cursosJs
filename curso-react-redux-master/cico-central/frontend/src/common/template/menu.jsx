import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Teste da Folha' icon='dashboard' />        
        <MenuTree label='Atualização' icon='edit'>
            <MenuItem path='#billingCycles'
                label='Máquina 1' icon='edit'/>
            <MenuItem path='#billingCycles'
                label='Máquina 2' icon='edit'/>                
            <MenuItem path='#billingCycles'
                label='Máquina 3' icon='edit'/>
        </MenuTree>
        <MenuTree label='Concessão' icon='usd'>
            <MenuItem path='#billingCycles'
                label='Máquina 1' icon='usd'/>
            <MenuItem path='#billingCycles'
                label='Máquina 2' icon='usd'/>                
            <MenuItem path='#billingCycles'
                label='Máquina 3' icon='usd'/>
        </MenuTree>
    </ul>
)