const { response } = require('express')
const express = require('express')
const { request } = require('http')
const uuid = require('uuid')
const app = express()
const port = 3000
app.use(express.json())


const hamburgueria = []

const checkUserId = (request, response, next) => {
  const { id } = request.params
  const index = hamburgueria.findIndex(user => user.id === id)
  if (index < 0) {
      return response.status(404).json({ error: "User not found" })
  }
  request.Userindex = index
  request.userId=id
  
  next()
}

const info= (request,response,next)=>{
  console.log(request.method)
  console.log(request.url)

  next()
}

app.get('/order',info, (request, response) => {
  return response.send(hamburgueria);
});

app.post('/order',info, (request, response) => {
  const { order, clienteName, price } = request.body
  const status = "Em preparação"
  const newOrder = { id: uuid.v4(), order, clienteName, price, status }
  hamburgueria.push(newOrder)
  return response.status(201).json(newOrder)
})

app.put('/order/:id',checkUserId,info, (request, response) => {
  const { order, clienteName, price, status } = request.body
  const index = request.Userindex
  const id=request.userId
  const updateOrder = { id, order, clienteName, price, status }
  hamburgueria[index] = updateOrder
  return response.json(updateOrder)
})

app.delete('/order/:id',checkUserId,info, (request, response) => {
  const index = request.Userindex
  hamburgueria.splice(index, 1)
  return response.status(204).json()
})

app.get('/order/:id',checkUserId,info, (request, response) => {
  const index = request.Userindex
  return response.send(hamburgueria[index]);
});

app.patch('/order/:id',checkUserId,info, (request, response) => {
   const index = request.Userindex
  const { order, clienteName, price } = request.body
  const status = "pronto"
  hamburgueria[index].status=status
  return response.send(hamburgueria[index])
})


app.listen(port, () => {
  console.log(` Servidor🚀 iniciado com sucesso na porta ${port}🚀`)
})

