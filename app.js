const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const { auth, requiresAuth } = require('express-openid-connect')
const dotenv = require('dotenv')
const mongoose = require('./db/connect')
const auth0 = require('./auth0')
const routes = require('./routes')
const swaggerFile = require('./swagger.json')
const errorHandler = require('./middleware/errorHandler')



dotenv.config()

const port = process.env.PORT || 8080
const app = express()

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.auth0secret,
    baseURL: process.env.auth0baseURL,
    clientID: process.env.auth0clientID,
    issuerBaseURL: process.env.auth0issuerBaseURL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config))

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(`hello ${req.oidc.user.name}`);
});

app
    // .use(auth0)
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
    .use(bodyParser.json())
    .use(cors())
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
    .use(routes)
    .use(errorHandler);

mongoose.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`)
    }
})