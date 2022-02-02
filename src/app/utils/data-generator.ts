import { IData } from '../interfaces';

export function generateDataSeriesForOneMonth(minutesStep: number = 5): IData[] {
  let unixTime = new Date(2022, 0, 1).getTime();
  let lastDay = new Date(2022, 0, 31).getTime();
  const dummyData = []
  while (unixTime <= lastDay) {
    dummyData.push(
      {
        value: `Calls: ${Math.floor(Math.random() * 99)}`,
        date: unixTime
      }
    );
    unixTime += 1000 * 60 * minutesStep
  }
  return dummyData

}
