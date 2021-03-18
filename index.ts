import * as provinceApi from './src/province'

import express from 'express'

const provinces = provinceApi.getAll()
console.log('provinces: ', provinces)

// const app = express()

// app.get('/', async (req, res) => {
//   res.send('Khmer Geo API Server')
// })

// const port = process.env.PORT || 3002
// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`)
// })
