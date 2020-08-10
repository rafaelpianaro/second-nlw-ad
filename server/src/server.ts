 import express from 'express'

 const app = express()

 app.get('/users', (request, response) => {
    const users = [
        {name: 'Doritos', age: 3},
        {name: 'Duna', age: 6}
    ] 
    return response.json(users)
 })

 app.listen(3333)