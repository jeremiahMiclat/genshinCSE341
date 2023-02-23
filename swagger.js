
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
        },
        {
            "name": "Weapon",
            "description": "Endpoints"
        }
    ],
    definitions: {
        "Character collection": [
            {
                "_id": "63dd835bc3c9c39c32edb7c1",
                "name": "albedo",
                "nation": "mondstadt",
                "element": "geo",
                "weaponType": "sword",
                "rarity": "5star",
                "estimatedAge": "18-22",
                "bonusStat": "geo damage bonus",
                "modelType": "medium male",
                "__v": 0
            }
        ],
        "Character document": {
            "_id": "63dd835bc3c9c39c32edb7c1",
            "name": "albedo",
            "nation": "mondstadt",
            "element": "geo",
            "weaponType": "sword",
            "estimatedAge": "18-22",
            "rarity": "5star",
            "bonusStat": "geo damage bonus",
            "modelType": "medium male",
            "__v": 0
        },
        "Character document creation": {
            "name": "albedo",
            "nation": "mondstadt",
            "element": "geo",
            "weaponType": "sword",
            "estimatedAge": "18-22",
            "rarity": "4star or 5star",
            "bonusStat": "geo damage bonus",
            "modelType": "medium male"
        },
        "Character update": {
            "name": "",
            "nation": "",
            "element": "",
            "weaponType": "",
            "rarity": "4star or 5star",
            "estimatedAge": "",
            "bonusStat": "",
            "modelType": "",
        },
        "Weapon document": {
            "_id": "63dd835bc3c9c39c32edb7c1",
            "weaponType": "polearm", "name": "the catch", "atkLVL90": "510",
            "rarity": "5star", "bonusStatLVL90": "energy recharge 45.9%", "__v": 0
        },
        "Weapon document creation": {
            "weaponType": "polearm", "name": "the catch", "atkLVL90": "510",
            "rarity": "5star", "bonusStatLVL90": "energy recharge 45.9%"
        },
        "Weapon collection": [
            {
                "_id": "63db34bd3c3121f817c88bf9",
                "weaponType": "bow",
                "name": "hamayumi",
                "atkLVL90": "454",
                "rarity": "4star",
                "bonusStatLVL90": "attack 55.1%"
            },
            {
                "_id": "63db35003c3121f817c88bfb",
                "weaponType": "polearm",
                "name": "the catch",
                "atkLVL90": "510",
                "rarity": "5star",
                "bonusStatLVL90": "energy recharge 45.9%",
                "__v": 0
            }
        ]
        ,
        "Delete Responses": {
            "acknowledged": true,
            "deletedCount": 1
        }
    }
}
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js')
})