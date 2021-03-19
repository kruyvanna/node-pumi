import * as communeApi from './src/commune'
import * as districtApi from './src/district'
import * as provinceApi from './src/province'
import * as villageApi from './src/village'

import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  res.send('Node Pumi API Server')
})

app.get('/provinces', async (req, res) => {
  const provinces = provinceApi.getAll()
  res.send(provinces)
})

app.get('/province/nameKm/:name', async (req, res) => {
  const { name } = req.params
  const province = provinceApi.findByNameKm(name)
  res.send(province)
})

app.get('/province/nameLatin/:name', async (req, res) => {
  const { name } = req.params
  const province = provinceApi.findByNameLatin(name)
  res.send(province)
})

app.get('/districts/:provinceId', async (req, res) => {
  const { provinceId } = req.params
  const districts = districtApi.getByProvinceId(provinceId)
  res.send(districts)
})

app.get('/district/nameKm/:name', async (req, res) => {
  const { name } = req.params
  const district = districtApi.findByNameKm(name)
  res.send(district)
})

app.get('/district/nameLatin/:name', async (req, res) => {
  const { name } = req.params
  const district = districtApi.findByNameLatin(name)
  res.send(district)
})

app.get('/communes/:districtId', async (req, res) => {
  const { districtId } = req.params
  const communes = communeApi.getByDistrictId(districtId)
  res.send(communes)
})

app.get('/commune/nameKm/:name', async (req, res) => {
  const { name } = req.params
  const commune = communeApi.findByNameKm(name)
  res.send(commune)
})

app.get('/commune/nameLatin/:name', async (req, res) => {
  const { name } = req.params
  const commune = communeApi.findByNameLatin(name)
  res.send(commune)
})

app.get('/villages/:communeId', async (req, res) => {
  const { communeId } = req.params
  const villages = villageApi.getByCommuneId(communeId)
  res.send(villages)
})

app.get('/village/nameKm/:name', async (req, res) => {
  const { name } = req.params
  const village = villageApi.findByNameKm(name)
  res.send(village)
})

app.get('/village/nameLatin/:name', async (req, res) => {
  const { name } = req.params
  const village = villageApi.findByNameLatin(name)
  res.send(village)
})

const port = process.env.PORT || 3002
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
