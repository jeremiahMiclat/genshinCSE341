const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const mongoose = require('./db/connect')
const routes = require('./routes')
const swaggerFile = require('./swagger.json')

const port = process.env.PORT || 8080
const app = express()

app
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Acess-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-Control-Allow-Headers',
            '*'
        )
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        next();
    })
    .use(routes);

mongoose.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`)
    }
})


