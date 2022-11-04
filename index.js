const express = require('express')

const app = express()

var router = express.Router();

router.get('/', (req, res) => {
    res.send('Server working')
})

app.use(router);

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})