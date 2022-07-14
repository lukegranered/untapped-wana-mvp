import React, {useState} from 'react'
import { TextArea } from '@progress/kendo-react-inputs';

export const NotesSection = () => {
    const [notes, setNotes] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Additional Notes</label>
            <TextArea data={notes} onChange={e => setNotes(e.value)} />
        </form>
    </div>
  )
}
