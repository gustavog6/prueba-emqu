import { IGeneric } from './IGeneric';

export interface ITest extends IGeneric {
    equipmentId:      string;
    equipmentName?:   string;
    type:             string;
    date:             string;
    result:           string;
  }