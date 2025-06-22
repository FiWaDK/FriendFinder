import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <main className="app">
      <h1>FriendFinder</h1>
      <p>Find nye venner baseret på dine interesser og værdier.</p>
      <Link to="/signup">
        <button>Kom i gang</button>
      </Link>
    </main>
  )
}

export default Home
