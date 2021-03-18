import * as villageApi from './village'

test('village of commune count', () => {
  const villages = villageApi.getByCommuneId('010201')
  expect(villages.length).toBe(19)
})

test('name not null', () => {
  const villages = villageApi.getAll()
  expect(villages[0].name.km).toEqual(expect.any(String))
})
