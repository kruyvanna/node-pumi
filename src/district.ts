import fs from 'fs'
import yaml from 'js-yaml'

export type District = {
  id: string
  name: {
    km: string
    latin: string
  }
}

function getDoc() {
  const file = fs.readFileSync('./src/data/districts.yml', 'utf8')
  return yaml.load(file)
}

export const getAll = (): District[] => {
  const doc = getDoc() as any
  const ids = Object.keys(doc.districts)
  const districts = ids.map((id) => {
    const values = doc.districts[id] as District
    return {
      ...values,
      id,
    }
  })
  return districts
}

export const getByProvinceId = (provinceId: string): District[] => {
  const all = getAll()
  const district = all.filter((d) => d.id.startsWith(provinceId))
  return district
}

export const findByNameKm = (name: string): District | undefined => {
  const all = getAll()
  const district = all.find((p) => p.name.km === name)
  return district
}

export const findByNameLatin = (name: string): District | undefined => {
  const all = getAll()
  const district = all.find((p) => p.name.latin === name)
  return district
}
