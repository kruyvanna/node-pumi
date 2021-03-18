import * as communeApi from './src/commune'
import * as districtApi from './src/district'
import * as provinceApi from './src/province'
import * as villageApi from './src/village'

import express from 'express'

const villages = villageApi.getByCommuneId('010201')
console.log('villages: ', villages)

// const communes = communeApi.getByDistrictId('0102')
// console.log('communes: ', communes)

// const districts = districtApi.getAll()
// console.log('districts: ', districts)

// const districtsOfPP = districtApi.getByProvinceId('12')
// console.log('districtsOfPP: ', districtsOfPP)

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
