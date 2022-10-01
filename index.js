const express = require('express') // importando 
const app = express() // Utilizando
const port = 3000

app.use(express.json())

// request.body // corpo ta requisição

// request.params // Requisições de delete ou update

// request.query // filtro e paginação

let users = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Victoria Doe',
  }
]

app.get('/', (request, response) => {
  response.json(users)
})

app.post('/', (request, response) => {
  const { id, name } = request.body

  users.push({ id, name }) // Insere um elemento no array

  return response.json(users)
})

app.put('/:index', (request, response) => {
  const { id, name } = request.body
  const index = request.params.index

  users = users.slice(0, index) // Remove um elemento do array a partir da posição 0

  users.push({ id, name }) // Insere um novo elemento no array

  return response.json(users) // retorna o resultado
})

app.delete('/:index', (request, response) => {
  const index = request.params.index

  users = users.slice(0, index) // Remove um elemento do array a partir da posição

  return response.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
