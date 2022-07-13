import React, { useState } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const symptoms = ['Giggly', 'Anxiety', 'Relaxed', 'Creative', 'Aroused', 'Energetic', 'Focused', 'Hungry', 'Happy']

export const SymptomsDropdown = () => {

    const [symptom, setSymptom] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Symptoms</label>
            <DropDownList data={symptoms} onChange={e => setSymptom(e.value)} />
        </form>
    </div>
  )
}