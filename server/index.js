import express from "express"
import cors from 'cors'
const app = express()
const port = 3000

const data = []

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/adduser', (req, res) => {
    data.push(req.body)
    res.send(req.body)
    console.log(req.body)
})

app.get('.getuser', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})