const { API } = require('easy-api.ts')

const api = new API({
    port: process.env.PORT || 3000,
  database: {
        enabled: true,
        type: 'replit', // 'replit', 'mongo', 'default'
        // mongoUrl: '....'
    }
})

api.setSpaces(1)

api.on('ready', () => {
    console.log('API connected.')
})

// We're connecting to the API when the source has been loaded
api.routes.load('./routes').then(() => { 
    console.log('Source loaded')
    api.connect()
}).catch(console.log)