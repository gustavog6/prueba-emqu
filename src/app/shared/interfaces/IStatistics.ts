import { IGeneric } from './IGeneric';

export interface IStatistics extends IGeneric {
    stats: stats[];
    totalPass: number;
    totalFail: number;
    total: number;
}

interface stats {
    equipmentId: string;
	testId: string;
    result: string;
	date?: string;
}
