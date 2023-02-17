const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.json({'KSK':'Place for Coding'})
})

app.get('/language/:keyword', (req, res) => {
  const { keyword } = req.params

  if(keyword == 'javascript'){
    res.json({'description':'My favorite language'})
  } else if(keyword == 'python'){
    res.json({'description':'I want to learn'})
  } else if(keyword == 'html'){
    res.json({'description':'It is not a programming language!'})
  } else {
    res.json({'description':'I do not know!'})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
