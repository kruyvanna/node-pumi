import YAML from 'yaml'
import fs from 'fs'

export type Commune = {
  id: string
  name: {
    kh: string
    latin: string
  }
}

function getDoc() {
  const file = fs.readFileSync('./src/data/communes.yml', 'utf8')
  return YAML.parse(file)
}

export const getAll = (): Commune[] => {
  const doc = getDoc()
  const ids = Object.keys(doc.communes)
  const communes = ids.map((id) => {
    const values = doc.communes[id] as Commune
    return {
      ...values,
      id,
    }
  })
  return communes
}

export const getByDistrictId = (districtId: string): Commune[] => {
  const all = getAll()
  const communes = all.filter((d) => d.id.startsWith(districtId))
  return communes
}
