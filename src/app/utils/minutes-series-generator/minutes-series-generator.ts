/**
 * Iterates over one day and creates an array of minutes
 */
export const generateMinutesSeries = (step: 5 | 30 | 60): string[] => {
  console.log('calculated minutes')
  const day = new Date(1970, 0, 1);
  const results = [];
  while (day.getDate() === 1) {
    // en-GB and 2 digit make sure results are following 24hour standard (00:00, 00:05 etc)
    results.push(day.toLocaleString('en-GB', {hour: '2-digit', minute:'2-digit'}));
    day.setMinutes(day.getMinutes() + step);
  }
  return results;
}
