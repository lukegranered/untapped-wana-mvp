import React, { useState } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const notes = ['Woodsy', 'Pine', 'Spicy', 'Herbal', 'Citrus', 'Earthy', 'Sweet Fruit', 'Metallic', 'Floral', 'Peppery']

export const TastingNotesDropdown = () => {

    const [tastingNotes, setTastingNotes] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Tasting Notes</label>
            <DropDownList data={notes} onChange={e => setTastingNotes(e.value)} />
        </form>
    </div>
  )
}