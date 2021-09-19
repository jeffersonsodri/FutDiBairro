const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

require('./src/controllers/AuthController')(app)

app.listen(port, () => console.log(`Example app listening on port port!`))