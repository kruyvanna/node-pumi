import * as communeApi from './commune'

test('commune of district count', () => {
  const communes = communeApi.getByDistrictId('0102')
  expect(communes.length).toBe(13)
})

test('name not null', () => {
  const communes = communeApi.getAll()
  expect(communes[0].name.km).toEqual(expect.any(String))
})
