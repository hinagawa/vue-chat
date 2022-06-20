const express = require('express')
const io = require('socket.io')
const app = express()
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

server = app.listen(8000, () => console.log(`The server is running on port ${8000}`));
io(server).on('connection', socket => {
    console.log('New user connected')
})