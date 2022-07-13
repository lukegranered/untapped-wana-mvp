import React, { useState } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const type = ['Indica', 'Sativa', 'Hybrid']

export const StrainTypeDropdown = () => {

    const [strainType, setStrainType] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Strain Type</label>
            <DropDownList data={type} onChange={e => setStrainType(e.value)} />
        </form>
    </div>
  )
}