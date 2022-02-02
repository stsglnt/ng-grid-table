import { IData } from '../../interfaces';

export const transformDataToEntities = (data: IData[]): any => {
  return data.reduce((entities: { [id: string]: any }, v: any) => {
    // we need to store only date so remove hours from timestamp
    const currentIteratingDay = new Date(v.date).setHours(0, 0, 0, 0);
    return {
      ...entities,
      [currentIteratingDay]: setEntityInterval(entities[currentIteratingDay], v)
    };
  }, {});
}

const setEntityInterval = (entity: any,  data: any): any => {
  // should correspond to the headers
  const intervalKey = new Date(data.date).toLocaleString('en-GB', {hour: '2-digit', minute:'2-digit'});
  entity = entity ? entity : {}
  entity = {
    ...entity,
    // add intervalKey to data.value to make sure that proper one is display when minutes step is changed
    [intervalKey]: {...data, value: `${data.value} / ${intervalKey}`}
  }
  return entity
}
