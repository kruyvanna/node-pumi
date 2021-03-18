import * as provinceApi from './province'

test('province count', () => {
  const provinces = provinceApi.getAll()
  expect(provinces.length).toBe(25)
})

test('get first province', () => {
  const provinces = provinceApi.getAll()
  expect(provinces[0].name.kh).toBe('បន្ទាយមានជ័យ')
})
