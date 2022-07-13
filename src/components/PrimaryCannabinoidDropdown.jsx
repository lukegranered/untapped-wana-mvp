import React, { useState } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const cannabinoids = ['THC - Delta 9', 'CBD', 'THC - A', 'THC - O', 'THC - Delta 8']

export const PrimaryCannabinoidDropdown = () => {

    const [primary, setPrimary] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Primary Cannabinoid</label>
            <DropDownList data={cannabinoids} onChange={e => setPrimary(e.value)} />
        </form>
    </div>
  )
}