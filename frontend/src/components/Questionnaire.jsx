import React, { useState } from 'react'
import '../App.css'

function Questionnaire() {
  const [activities, setActivities] = useState([])
  const [description, setDescription] = useState('')
  const [friendship, setFriendship] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleActivityChange = event => {
    const { value, checked } = event.target
    if (checked) {
      setActivities(prev => [...prev, value])
    } else {
      setActivities(prev => prev.filter(a => a !== value))
    }
  }

  const handleSubmit = () => {
    setSubmitted(true)
    console.log({ activities, description, friendship })
  }

  return (
    <div className="questionnaire">
      <h3>Hvilke aktiviteter kan du lide at lave med venner?</h3>
      <div className="activities">
        {['Se film', 'Gå ture', 'Spille spil', 'Lave mad'].map(option => (
          <label key={option} style={{ display: 'block', marginBottom: '0.25rem' }}>
            <input
              type="checkbox"
              value={option}
              checked={activities.includes(option)}
              onChange={handleActivityChange}
            />
            {option}
          </label>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>
          Hvordan beskriver du dig selv?
          <br />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
            style={{ width: '100%', marginTop: '0.25rem' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>
          Hvad er vigtigt for dig i et venskab?
          <br />
          <textarea
            value={friendship}
            onChange={e => setFriendship(e.target.value)}
            rows={3}
            style={{ width: '100%', marginTop: '0.25rem' }}
          />
        </label>
      </div>

      <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>Send</button>

      {submitted && (
        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
          <h4>Dine svar:</h4>
          <p><strong>Aktiviteter:</strong> {activities.join(', ') || 'Ingen valgt'}</p>
          <p><strong>Beskrivelse:</strong> {description || 'Ingen'}</p>
          <p><strong>Venskab:</strong> {friendship || 'Ingen'}</p>
        </div>
      )}
    </div>
  )
}

export default Questionnaire
