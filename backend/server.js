const express = require('express')

const path = require('path');
const PORT = process.env.PORT || 5000;
const HOST = process.env.Host || 'localhost';

const app = express()
app.use('/', express.static(path.join(__dirname,'backend/angular'))) // __dirname = le path jusqu'à backend

app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/angular', 'index.html'))
})

app.listen(PORT,() =>{
  console.log(`server running at http://${HOST}:${PORT}`)
})