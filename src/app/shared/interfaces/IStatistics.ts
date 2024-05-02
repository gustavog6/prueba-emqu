import { IGeneric } from './IGeneric';

export interface IStatistics extends IGeneric {
    name: stats[];
    totalPass: number;
    totalFail: number;
    total: number;
}

interface stats {
    equipmentId: string;
    result: string;
}
