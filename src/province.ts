import YAML from 'yaml'
import fs from 'fs'

export type Province = {
  id: string
  name: {
    km: string
    latin: string
  }
}

function getDoc() {
  const file = fs.readFileSync('./src/data/provinces.yml', 'utf8')
  return YAML.parse(file)
}

export const getAll = (): Province[] => {
  const doc = getDoc()
  const ids = Object.keys(doc.provinces)
  const provinces = ids.map((id) => {
    const province = doc.provinces[id] as Province
    return {
      ...province,
      id,
    }
  })
  return provinces
}
