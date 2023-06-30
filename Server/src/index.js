const PORT = 3001
const server = require('./server.js')


server.listen(PORT, () => console.log('Server raised on port: ' + PORT))