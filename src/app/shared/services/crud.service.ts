import { Injectable } from '@angular/core';
import { IMachine } from '../interfaces/IMachine';
import { IGeneric } from '../interfaces/IGeneric';
import { ITest } from '../interfaces/ITest';

@Injectable({
    providedIn: 'root',
})
export class CrudService {
    constructor() {}

    init(): Promise<any> {
        return new Promise((resolve) => {
            // Define tu estructura de datos
            const equipment: IMachine[] = [
                {
                    _id: '1',
                    name: 'Machine1',
                    ipv4: '192.168.1.1',
                    mac: '00:0a:95:9d:68:16',
                    os: 'Windows 10',
                    manufacturer: 'Dell',
                    description: 'Dell laptop with Windows 10',
                    status: 'Active',
                },
                {
                    _id: '2',
                    name: 'Machine2',
                    ipv4: '192.168.1.2',
                    mac: '00:0a:95:9d:68:17',
                    os: 'macOS Big Sur',
                    manufacturer: 'Apple',
                    description: 'MacBook Pro with macOS Big Sur',
                    status: 'Active',
                },
                {
                    _id: '3',
                    name: 'Machine3',
                    ipv4: '192.168.1.3',
                    mac: '00:0a:95:9d:68:18',
                    os: 'Ubuntu 20.04',
                    manufacturer: 'Lenovo',
                    description: 'Lenovo desktop with Ubuntu 20.04',
                    status: 'Inactive',
                },
                {
                    _id: '4',
                    name: 'Machine4',
                    ipv4: '192.168.1.4',
                    mac: '00:0a:95:9d:68:19',
                    os: 'Windows 11',
                    manufacturer: 'HP',
                    description: 'HP laptop with Windows 11',
                    status: 'Active',
                },
                {
                    _id: '5',
                    name: 'Machine5',
                    ipv4: '192.168.1.5',
                    mac: '00:0a:95:9d:68:20',
                    os: 'macOS Monterey',
                    manufacturer: 'Apple',
                    description: 'iMac with macOS Monterey',
                    status: 'Inactive',
                },
            ];

            const test: ITest[] = [
                {
                    _id: "ABC1Z",
                    equipmentId: "1",
                    type: "Ping",
                    date: "2024-05-02T16:07:39Z",
                    result: "Pass"
                },
                {
                    _id: "DEF2Y",
                    equipmentId: "2",
                    type: "Ping",
                    date: "2024-05-03T16:07:39Z",
                    result: "Fail"
                },
                {
                    _id: "GHI3X",
                    equipmentId: "3",
                    type: "Ping",
                    date: "2024-05-04T16:07:39Z",
                    result: "Pass"
                },
                {
                    _id: "JKL4W",
                    equipmentId: "4",
                    type: "Ping",
                    date: "2024-05-05T16:07:39Z",
                    result: "Fail"
                },
                {
                    _id: "MNO5V",
                    equipmentId: "5",
                    type: "Ping",
                    date: "2024-05-06T16:07:39Z",
                    result: "Pass"
                },
                {
                    _id: "PQR6U",
                    equipmentId: "1",
                    type: "Ping",
                    date: "2024-05-07T16:07:39Z",
                    result: "Fail"
                },
                {
                    _id: "STU7T",
                    equipmentId: "2",
                    type: "Ping",
                    date: "2024-05-08T16:07:39Z",
                    result: "Pass"
                }
            ]

            this.initializeLocalStorage(equipment, test);

            resolve(true);
        });
    }

	getAll(key: string): IGeneric[] {
        const item = localStorage.getItem(key);
        return JSON.parse(item) || [];
    }

    getById(key: string, id: string): IGeneric {
        const items = this.getAll(key);
        return items.find(item => item._id === id);
    }

    save(key: string, item: IGeneric): void {
        const items = this.getAll(key);
        items.push(item);
        localStorage.setItem(key, JSON.stringify(items));
    }

    update(key: string, id: string, updatedItem: IGeneric): void {
        let items = this.getAll(key);
        items = items.map(item => item._id === id ? updatedItem : item);
        localStorage.setItem(key, JSON.stringify(items));
    }

    deleteById(key: string, id: string): void {
        let items = this.getAll(key);
        items = items.filter(item => item._id !== id);
        localStorage.setItem(key, JSON.stringify(items));
    }

    deleteByIds(key: string, ids: string[]): void {
        let items = this.getAll(key);
        items = items.filter(item => !ids.includes(item._id));
        localStorage.setItem(key, JSON.stringify(items));
    }

    private initializeLocalStorage(equipment, test) {
        if (!localStorage.getItem('equipment')) {
            localStorage.setItem('equipment', JSON.stringify(equipment));
        }
    
        if (!localStorage.getItem('test')) {
            localStorage.setItem('test', JSON.stringify(test));
        }
    }
}
