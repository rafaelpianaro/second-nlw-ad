 import express from 'express'

 const app = express()

 app.use(express.json())

 app.get('/users', (request, response) => {
     console.log(request.body)

    const users = [
        {name: 'Doritos', age: 3},
        {name: 'Duna', age: 6}
    ] 
    return response.json(users)
 })

 app.listen(3333)