import { IGeneric } from './IGeneric';

export interface IMachine extends IGeneric {
    name:             string;
    ipv4:             string;
    mac:              string;
    os:               string;
    manufacturer:     string;
    description:      string;
    status:           string;
  }