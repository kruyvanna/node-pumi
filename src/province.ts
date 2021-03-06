import fs from 'fs'
import yaml from 'js-yaml'

export type Province = {
  id: string
  name: {
    km: string
    latin: string
  }
}

function getDoc() {
  const file = fs.readFileSync('./src/data/provinces.yml', 'utf8')
  return yaml.load(file)
}

export const getAll = (): Province[] => {
  const doc = getDoc() as any
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

export const findByNameKm = (name: string): Province | undefined => {
  const all = getAll()
  const province = all.find((p) => p.name.km === name)
  return province
}

export const findByNameLatin = (name: string): Province | undefined => {
  const all = getAll()
  const province = all.find((p) => p.name.latin === name)
  return province
}
