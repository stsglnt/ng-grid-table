import {generateMinutesSeries} from "./minutes-series-generator";

describe('MinutesSeriesGenerator', () => {

  it('should generate 24 hours series with 5 min step', () => {
    const series5minStep = generateMinutesSeries(5);
    expect(series5minStep[0]).toEqual('00:00');
    expect(series5minStep[1]).toEqual('00:05');
    expect(series5minStep[series5minStep.length - 1]).toEqual('23:55');
    expect(series5minStep[series5minStep.length - 2]).toEqual('23:50');
  })

  it('should generate 24 hours series with 30 min step', () => {
    const series30minStep = generateMinutesSeries(30);
    expect(series30minStep[0]).toEqual('00:00');
    expect(series30minStep[1]).toEqual('00:30');
    expect(series30minStep[series30minStep.length - 1]).toEqual('23:30');
    expect(series30minStep[series30minStep.length - 2]).toEqual('23:00');
  })

  it('should generate 24 hours series with 60 min step', () => {
    const series60minStep = generateMinutesSeries(60);
    expect(series60minStep[0]).toEqual('00:00');
    expect(series60minStep[1]).toEqual('01:00');
    expect(series60minStep[series60minStep.length - 1]).toEqual('23:00');
    expect(series60minStep[series60minStep.length - 2]).toEqual('22:00');
  })

})
