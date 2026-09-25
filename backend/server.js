const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/api/type/:idOrName', async (req, res) => {
  const { idOrName } = req.params

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${encodeURIComponent(idOrName)}/`)
    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json(data)
    }

    res.json({
      half_damage_to: data.damage_relations.half_damage_to.map(({ name }) => name),
      double_damage_from: data.damage_relations.double_damage_from.map(({ name }) => name),
    })
  } catch (error) {
    console.error('Failed to fetch Pokémon type:', error)
    res.status(502).json({ error: 'Unable to fetch Pokémon type from PokéAPI.' })
  }
})

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`)
})
