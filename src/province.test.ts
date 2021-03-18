import * as provinceApi from './province'

test('adds 1 + 2 to equal 3', () => {
  const provinces = provinceApi.getAll()
  expect(provinces.length).toBe(25)
})
