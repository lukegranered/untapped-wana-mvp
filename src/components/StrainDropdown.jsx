import React, { useState } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const kind = ['tbd']

export const StrainDropdown = () => {

    const [strain, setStrain] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Strain</label>
            <DropDownList data={kind} onChange={e => setStrain(e.value)} />
        </form>
    </div>
  )
}