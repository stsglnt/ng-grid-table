import { FormatDatePipe } from './date-format.pipe';

describe('DateFormatPipe', () => {

  it('should transform unix timestamp to readable day', () => {
    const formatDate = new FormatDatePipe();
    const unixTimestamp = 1640988000000;
    expect(formatDate.transform(unixTimestamp)).toEqual('Saturday');
  })

})
