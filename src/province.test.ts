import * as provinceApi from './province'

test('province count', () => {
  const provinces = provinceApi.getAll()
  expect(provinces.length).toBe(25)
})

test('get first province', () => {
  const provinces = provinceApi.getAll()
  const firstProvince = provinces[0]
  expect(firstProvince.name.km).toBe('ក្រចេះ')
})

test('get by name latin', () => {
  const province = provinceApi.findByNameLatin('Phnom Penh')
  expect(province!.name.latin).toBe('Phnom Penh')
})

test('get by name khmer', () => {
  const province = provinceApi.findByNameKm('ភ្នំពេញ')
  expect(province!.name.km).toBe('ភ្នំពេញ')
})
