import { IStatistics } from '../interfaces/IStatistics';

export const statistic: IStatistics[] = [{
    _id: '1',
    stats: [
        {
            equipmentId: '1',
            testId: 'ABC1Z',
            result: 'Pass',
        },
        {
            equipmentId: '2',
            testId: 'DEF2Y',
            result: 'Fail',
        },
        {
            equipmentId: '3',
            testId: 'GHI3X',
            result: 'Pass',
        },
        {
            equipmentId: '4',
            testId: 'JKL4W',
            result: 'Fail',
        },
        {
            equipmentId: '5',
            testId: 'MNO5V',
            result: 'Pass',
        },
        {
            equipmentId: '1',
            testId: 'PQR6U',
            result: 'Fail',
        },
        {
            equipmentId: '2',
            testId: 'STU7T',
            result: 'Pass',
        },
    ],
    totalPass: 4,
    totalFail: 3,
    total: 7,
}];