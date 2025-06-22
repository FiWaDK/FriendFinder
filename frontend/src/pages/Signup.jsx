import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleNext = () => {
    navigate('/onboarding')
  }

  return (
    <div className="signup-page">
      <h2>Tilmeld dig</h2>
      <div>
        <label>
          Navn:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Alder:
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          By:
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleNext}>Næste</button>
    </div>
  )
}

export default Signup
