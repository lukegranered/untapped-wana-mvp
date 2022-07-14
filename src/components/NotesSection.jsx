import React from 'react'

export const NotesSection = () => {
  return (
    <div className='k-label k-mb-3'>
        <label>Additional Notes</label>
        <textarea name='notes' id='notes' placeholder='Enter additional notes'></textarea>
    </div>
  )
}
