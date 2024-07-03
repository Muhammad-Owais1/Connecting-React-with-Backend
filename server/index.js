import express from "express"
import cors from 'cors'
const app = express()
const port = 3000

const data = []

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    try{
        res.send('Hello World!')
    }
    catch (err) {
        console.log(err)
    }
})

app.post('/adduser', (req, res) => {
    try{
        res.send(req.body)
        console.log(req.body)
    }
    catch(err) {
        console.log(err)
    }
})

// app.get('.getuser', (req, res) => {
//     res.send(data)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})