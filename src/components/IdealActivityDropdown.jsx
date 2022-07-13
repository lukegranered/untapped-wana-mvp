import React, { useState } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const activities = ['Hiking', 'TV', 'Movie', 'Gaming', 'Fornicating', 'Music']

export const IdealActivityDropdown = () => {

    const [idealActivity, setIdealActivity] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Ideal Activity</label>
            <DropDownList data={activities} onChange={e => setIdealActivity(e.value)} />
        </form>
    </div>
  )
}