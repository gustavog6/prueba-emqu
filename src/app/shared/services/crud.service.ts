import { Injectable } from '@angular/core';
import { IGeneric } from '../interfaces/IGeneric';
import { equipment } from '../constants/equipment';
import { test } from '../constants/test';
import { statistic } from '../constants/statistics';

@Injectable({
    providedIn: 'root',
})
export class CrudService {
    constructor() {}

    init(): Promise<any> {
        return new Promise((resolve) => {
            this.initializeLocalStorage(equipment, test, statistic);
            resolve(true);
        });
    }

    getAll(key: string): IGeneric[] {
        const item = localStorage.getItem(key);
        return JSON.parse(item) || [];
    }

    getById(key: string, id: string): IGeneric {
        const items = this.getAll(key);
        return items.find((item) => item._id === id);
    }

    save(key: string, item: IGeneric): void {
        const items = this.getAll(key);
        items.push(item);
        localStorage.setItem(key, JSON.stringify(items));
    }

    update(key: string, id: string, updatedItem: IGeneric): void {
        let items = this.getAll(key);
        items = items.map((item) => (item._id === id ? updatedItem : item));
        localStorage.setItem(key, JSON.stringify(items));
    }

    deleteById(key: string, id: string): void {
        let items = this.getAll(key);
        items = items.filter((item) => item._id !== id);
        localStorage.setItem(key, JSON.stringify(items));
    }

    deleteByIds(key: string, ids: string[]): void {
        let items = this.getAll(key);
        items = items.filter((item) => !ids.includes(item._id));
        localStorage.setItem(key, JSON.stringify(items));
    }

    private initializeLocalStorage(equipment, test, statistic) {
        if (!localStorage.getItem('equipment')) {
            localStorage.setItem('equipment', JSON.stringify(equipment));
        }

        if (!localStorage.getItem('test')) {
            localStorage.setItem('test', JSON.stringify(test));
        }

        if (!localStorage.getItem('statistic')) {
            localStorage.setItem('statistic', JSON.stringify(statistic));
        }
        
        if (!localStorage.getItem('isLoggedIn')) {
            localStorage.setItem('isLoggedIn', 'false');
        }
        
    }
}
