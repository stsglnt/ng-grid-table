import { transformDataToEntities } from './data-transformation';

describe('Data transformation', () => {

  it('should transform data into entities with first key as day and inner keys as minutes steps', () => {
    const dummyData = [
      {value: 'Value: 2', date: 1640988000000},
      {value: 'Value: 3', date: 1640988300000},
      {value: 'Value: 4', date: 1641075900000}
    ]
    const expectedResult = {
        '1640988000000': {
          '00:00': { value: 'Value: 2 / 00:00', date: 1640988000000 },
          '00:05': { value: 'Value: 3 / 00:05', date: 1640988300000 }
        },
        '1641074400000': {
          '00:25': { value: 'Value: 4 / 00:25', date: 1641075900000 }
        }
      }
    expect(transformDataToEntities(dummyData)).toEqual(expectedResult);
  })
})
