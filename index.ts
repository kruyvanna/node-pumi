import * as districtApi from './src/district'
import * as provinceApi from './src/province'

import express from 'express'

// const districts = districtApi.getAll()
// console.log('districts: ', districts)

const districtsOfPP = districtApi.getByProvinceId('12')
console.log('districtsOfPP: ', districtsOfPP)

// const provinces = provinceApi.getAll()
// console.log('provinces: ', provinces)

// const app = express()

// app.get('/', async (req, res) => {
//   res.send('Khmer Geo API Server')
// })

// const port = process.env.PORT || 3002
// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`)
// })
