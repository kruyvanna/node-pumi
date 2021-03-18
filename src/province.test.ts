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
