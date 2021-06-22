const fs = require('fs')

import * as api from '../commune'

export const run = () => {
  const communes = api.getAll().map((commune) => {
    return { ...commune, administrative_unit: undefined }
  })
  try {
    fs.writeFileSync('./output/communes.json', JSON.stringify(communes))
    console.log('Finished')
  } catch (err) {
    console.error(err)
  }
}
