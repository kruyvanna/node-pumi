import fs from 'fs'
import yaml from 'js-yaml'

export type Village = {
  id: string
  name: {
    km: string
    latin: string
  }
}

function getDoc() {
  const file = fs.readFileSync('./src/data/villages.yml', 'utf8')
  return yaml.load(file)
}

export const getAll = (): Village[] => {
  const doc = getDoc() as any
  const ids = Object.keys(doc.villages)
  const villages = ids.map((id) => {
    const values = doc.villages[id] as Village
    return {
      ...values,
      id,
    }
  })
  return villages
}

export const getByCommuneId = (communeId: string): Village[] => {
  const all = getAll()
  const villages = all.filter((d) => d.id.startsWith(communeId))
  return villages
}
