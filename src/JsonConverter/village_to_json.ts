const fs = require('fs')

import * as villageApi from '../village'

export const run = () => {
  const villages = villageApi.getAll().map((village) => {
    return { ...village, administrative_unit: undefined }
  })
  try {
    fs.writeFileSync('./output/villages.json', JSON.stringify(villages))
    console.log('Finished')
  } catch (err) {
    console.error(err)
  }
}
