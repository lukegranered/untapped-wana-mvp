import React, { useState } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const howMuch = ['A Little Amount', 'A Medium Amount', 'A Lot']

export const AmountDropdown = () => {

    const [amount, setAmount] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Amount</label>
            <DropDownList data={howMuch} onChange={e => setAmount(e.value)} />
        </form>
    </div>
  )
}