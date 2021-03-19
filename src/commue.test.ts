import * as communeApi from './commune'

test('commune of district count', () => {
  const communes = communeApi.getByDistrictId('0102')
  expect(communes.length).toBe(13)
})

test('name not null', () => {
  const communes = communeApi.getAll()
  expect(communes[0].name.km).toEqual(expect.any(String))
})

test('get by name latin', () => {
  const commune = communeApi.findByNameLatin('Banteay Neang')
  expect(commune!.name.latin).toBe('Banteay Neang')
})

test('get by name khmer', () => {
  const commune = communeApi.findByNameKm('បន្ទាយនាង')
  expect(commune!.name.km).toBe('បន្ទាយនាង')
})
