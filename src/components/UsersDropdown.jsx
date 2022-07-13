import React, { useState } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const users = ['Alone', 'A Few Friends', 'Party']

export const UsersDropdown = () => {

    const [user, setUser] = useState('');
  return (
    <div className='k-my-8'>
        <form className='k-form k-mb-4'>
            <label className='k-label k-mb-3'>Users</label>
            <DropDownList data={users} onChange={e => setUser(e.value)} />
        </form>
    </div>
  )
}