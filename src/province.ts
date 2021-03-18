import YAML from 'yaml'
import fs from 'fs'

export type Province = {
  name: {
    kh: string
    latin: string
  }
}

function getDoc() {
  console.log(__dirname)
  console.log(process.cwd())
  const file = fs.readFileSync('./src/data/provinces.yml', 'utf8')
  return YAML.parse(file)
}

export const getAll = (): Province[] => {
  const doc = getDoc()
  //   console.log('doc: ', doc)
  return Object.values(doc.provinces)
}
