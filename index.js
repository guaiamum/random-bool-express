const express = require('express')
const app = express()
const port = 3000

const genRandomBool = () => Boolean((Math.random() >= 0.5));

app.get('/', (req, res) => res.send(genRandomBool()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
