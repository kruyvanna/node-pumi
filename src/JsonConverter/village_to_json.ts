const fs = require('fs')

import * as villageApi from '../village'

const villages = villageApi.getAll()
try {
  fs.writeFileSync('./villages.json', JSON.stringify(villages))
  console.log('Finished')
} catch (err) {
  console.error(err)
}
