import fs from 'fs'
import yaml from 'js-yaml'

export type Commune = {
  id: string
  name: {
    km: string
    latin: string
  }
}

function getDoc() {
  const file = fs.readFileSync('./src/data/communes.yml', 'utf8')
  return yaml.load(file)
}

export const getAll = (): Commune[] => {
  const doc = getDoc() as any
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

export const findByNameKm = (name: string): Commune | undefined => {
  const all = getAll()
  const commune = all.find((p) => p.name.km === name)
  return commune
}

export const findByNameLatin = (name: string): Commune | undefined => {
  const all = getAll()
  const commune = all.find((p) => p.name.latin === name)
  return commune
}
