import React from 'react'
import { IntakeDropdown } from './IntakeDropdown'
import '@progress/kendo-theme-default/dist/all.css'
import { AmountDropdown } from './AmountDropdown'
import { StrainDropdown } from './StrainDropdown'
import { StrainTypeDropdown } from './StrainTypeDropdown'
import { TastingNotesDropdown } from './TastingNotesDropdown'
import { IdealActivityDropdown } from './IdealActivityDropdown'
import { UsersDropdown } from './UsersDropdown'
import { SymptomsDropdown } from './SymptomsDropdown'
import { PrimaryCannabinoidDropdown } from './PrimaryCannabinoidDropdown'
import { NotesSection } from './NotesSection'
import { SubmitButton } from './SubmitButton'


export const NewSession = () => {
  return (
    <div className='container'>
        <IntakeDropdown />
        <AmountDropdown />
        <StrainDropdown />
        <StrainTypeDropdown />
        <TastingNotesDropdown />
        <IdealActivityDropdown />
        <UsersDropdown />
        <SymptomsDropdown />
        <PrimaryCannabinoidDropdown />
        <NotesSection />
        <SubmitButton />
    </div>
  )
}
