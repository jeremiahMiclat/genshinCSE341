
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']


const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:8080",
    basePath: "/",
    schemes: 'http',
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Character",
            "description": "Endpoints"
        }
    ],
    definitions: {
        Character: {
            "name": "albedo",
            "nation": "mondstadt",
            "element": "geo",
            "weaponType": "sword",
            "estimatedAge": "18-22",
            "rarity": "5star",
            "bonusStat": "geo damage bonus",
            "modelType": "medium male"
        },
        Weapon: {
            "weaponType": "polearm", "name": "the catch", "atk(lvl90)": "510",
            "rarity": "5star", "bonustStat(lvl90)": "energy recharge 45.9%"
        },
        contact_id: "63caeccb50a864c0afbdb910",
        delRes: {
            "acknowledged": true,
            "deletedCount": 1
        }
    }
}
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js')
})