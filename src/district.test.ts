import * as districtApi from './district'

test('district of Phnom Penh count', () => {
  const districts = districtApi.getByProvinceId('12')
  expect(districts.length).toBe(14)
})

test('name not null', () => {
  const districts = districtApi.getAll()
  expect(districts[0].name.km).toEqual(expect.any(String))
})
