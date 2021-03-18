import YAML from 'yaml'
import fs from 'fs'

export type District = {
  id: string
  name: {
    km: string
    latin: string
  }
}

function getDoc() {
  const file = fs.readFileSync('./src/data/districts.yml', 'utf8')
  return YAML.parse(file)
}

export const getAll = (): District[] => {
  const doc = getDoc()
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
