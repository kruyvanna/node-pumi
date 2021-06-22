const fs = require('fs')

import * as api from '../district'

export const run = () => {
  const districts = api.getAll().map((district) => {
    return { ...district, administrative_unit: undefined }
  })
  try {
    fs.writeFileSync('./output/districts.json', JSON.stringify(districts))
    console.log('Finished')
  } catch (err) {
    console.error(err)
  }
}
