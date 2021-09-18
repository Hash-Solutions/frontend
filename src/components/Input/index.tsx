import React from 'react'

export default function Input({ submitting, handleChange, value, label, name }) {
  return (
      <fieldset disabled={submitting} >
        <label>
          <p>{label}</p>
          <input name={name} onChange={e => handleChange(e)} value={value || ''}/>
        </label>
      </fieldset>
  )
}
