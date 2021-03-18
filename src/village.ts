import YAML from 'yaml'
import fs from 'fs'

export type Village = {
  id: string
  name: {
    kh: string
    latin: string
  }
}

function getDoc() {
  const file = fs.readFileSync('./src/data/villages.yml', 'utf8')
  return YAML.parse(file)
}

export const getAll = (): Village[] => {
  const doc = getDoc()
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
