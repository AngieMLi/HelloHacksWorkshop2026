import { useState } from 'react'

function App() {
  const [selectedType, setSelectedType] = useState('')
  const [matchup, setMatchup] = useState(null)
  const types = ['Fire', 'Water', 'Grass', 'Ground']

  async function getMatchup(type) {
    try {
      const response = await fetch(`http://localhost:3000/api/type/${encodeURIComponent(type.toLowerCase())}`)
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Unable to get matchup:', error)
      return { error: 'Unable to load matchup. Please try again.' }
    }
  }

  async function handleTypeClick(type) {
    setSelectedType(type)
    setMatchup(await getMatchup(type))
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-amber-50 px-5 py-12 text-slate-900">
      <section className="w-full max-w-lg rounded-3xl border-2 border-slate-900 bg-white p-7 shadow-[6px_6px_0_#1e293b] sm:p-10">
        <div className="mb-8 flex items-center gap-3">
          <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-full border-2 border-slate-900 bg-red-500 text-xl text-white">✦</span>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Trainer toolkit</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Pokémon Battle Assistant</h1>
        <p className="mt-3 text-slate-600">What type of Pokémon are you facing?</p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {types.map((type) => (
            <button
              key={type}
              type="button"
              aria-pressed={selectedType === type}
              onClick={() => handleTypeClick(type)}
              className={`rounded-xl border-2 px-4 py-3 font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${selectedType === type ? 'border-slate-900 bg-red-500 text-white shadow-[3px_3px_0_#1e293b]' : 'border-slate-200 bg-amber-50 hover:border-red-400 hover:bg-red-50'}`}
            >
              {type}
            </button>
          ))}
        </div>

        <div aria-live="polite" className="mt-6 min-h-6 text-sm font-medium text-slate-600">
          {matchup?.error || (matchup && (
            <>
              <p>Half damage to: {matchup.half_damage_to.join(', ') || 'none'}</p>
              <p>Double damage from: {matchup.double_damage_from.join(', ') || 'none'}</p>
            </>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
