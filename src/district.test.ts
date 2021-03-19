import * as districtApi from './district'

test('district of Phnom Penh count', () => {
  const districts = districtApi.getByProvinceId('12')
  expect(districts.length).toBe(14)
})

test('name not null', () => {
  const districts = districtApi.getAll()
  expect(districts[0].name.km).toEqual(expect.any(String))
})

test('get by name latin', () => {
  const district = districtApi.findByNameLatin('Mongkol Borei')
  expect(district!.name.latin).toBe('Mongkol Borei')
})

test('get by name khmer', () => {
  const district = districtApi.findByNameKm('មង្គលបូរី')
  expect(district!.name.km).toBe('មង្គលបូរី')
})
