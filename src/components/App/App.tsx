import React, { useReducer, useState } from 'react';
import Input from '../Input';
import './App.css';



function App() {
  const [formData, setFormData] = useState({
    name: null,
    'gift-wrap': false,
    'apple': null,
    count: 100,

  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    console.log("formData", formData)
    setSubmitting(false);
  }

  const handleChange = event => {
    setFormData(oldState => ({...oldState, [event.target.name]: event.target.value}));
  }

  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <Input
          submitting={submitting}
          handleChange={handleChange}
          value={formData.name}
          label={'Name2'}
          name={'name'}
        />
        <Input
          submitting={submitting}
          handleChange={handleChange}
          value={formData.apple}
          label={'Name3'}
          name={'apple'}
        />
        {/* <fieldset disabled={submitting}>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            <p>Name</p>
            <input name="wew" onChange={handleChange} value={formData.wew || ''}/>
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            <p>Apples</p>
            <select name="apple" onChange={handleChange} value={formData.apple || ''}>
                <option value="">--Please choose an option--</option>
                <option value="fuji">Fuji</option>
                <option value="jonathan">Jonathan</option>
                <option value="honey-crisp">Honey Crisp</option>
            </select>
          </label>
          <label>
            <p>Count</p>
            <input type="number" name="count" onChange={handleChange} step="1" value={formData.count || ''}/>
          </label>
          <label>
            <p>Gift Wrap</p>
            <input
             checked={formData['gift-wrap'] || false}
             disabled={formData.apple !== 'fuji'}
             name="gift-wrap"
             onChange={handleChange}
             type="checkbox"
            />
          </label>
        </fieldset> */}
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </div>
  )
}

export default App;
