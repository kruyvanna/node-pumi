const fs = require('fs')

import * as api from '../province'

export const run = () => {
  const provinces = api.getAll().map((province) => {
    return { ...province, administrative_unit: undefined }
  })
  try {
    fs.writeFileSync('./output/provinces.json', JSON.stringify(provinces))
    console.log('Finished')
  } catch (err) {
    console.error(err)
  }
}
