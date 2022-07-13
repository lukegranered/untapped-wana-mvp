import React, { useState } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const method = ['Joint', 'Blunt', 'Bowl', 'Bubbler', 'One Hitter', 'Vape']

export const IntakeDropdown = () => {

    const [intake, setIntake] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Intake</label>
            <DropDownList data={method} onChange={e => setIntake(e.value)} />
        </form>
    </div>
  )
}
