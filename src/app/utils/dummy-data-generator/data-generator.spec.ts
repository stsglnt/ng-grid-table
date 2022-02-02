import { generateDataSeriesForOneMonth } from './data-generator';

describe('DateGenerator', () => {

  it('should generate one month of data with 5 minutes step', () => {
    const actualResult = generateDataSeriesForOneMonth(5);
    const expectedFirst5min = '01/01/2022, 00:05:00'
    const expectedSecondToLast5min = '29/01/2022, 23:50:00'
    expect(new Date(actualResult[1].date).toLocaleString('en-GB')).toEqual(expectedFirst5min);
    expect(new Date(actualResult[actualResult.length - 2].date).toLocaleString('en-GB')).toEqual(expectedSecondToLast5min);
  })

})
