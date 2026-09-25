import { useState } from 'react'

function App() {
  const [selectedType, setSelectedType] = useState('')
  const types = ['Fire', 'Water', 'Grass', 'Ground']

    function getMatchup(type) {
        // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
        return `Fake API response: You are fighting a ${type}-type Pokémon.`;
    }

    function handleTypeClick(type) {
        const response = getMatchup(type);
        setSelectedType(response);
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
              onClick={() => handleTypeClick(type.name)}
              className={`rounded-xl border-2 px-4 py-3 font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${selectedType === type ? 'border-slate-900 bg-red-500 text-white shadow-[3px_3px_0_#1e293b]' : 'border-slate-200 bg-amber-50 hover:border-red-400 hover:bg-red-50'}`}
            >
              {type}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="mt-6 min-h-6 text-sm font-medium text-slate-600">
          {selectedType}
        </p>
      </section>
    </main>
  )
}

export default App
