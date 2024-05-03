import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { IMachine } from 'src/app/shared/interfaces/IMachine';
import { ITest } from 'src/app/shared/interfaces/ITest';
import { CrudService } from 'src/app/shared/services/crud.service';
import { TesterChangeService } from '../../services/tester-change.service';

@Component({
    selector: 'app-test-table',
    templateUrl: './test-table.component.html',
    styleUrl: './test-table.component.scss',
})
export class TestTableComponent {
    tests: ITest[] = [];

    selectedTests: ITest[] = [];

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private _crudService: CrudService, private _testChage: TesterChangeService) {
        this._testChage.onNewTest().subscribe((res) => {
            this.getTests();
        })
    }

    ngOnInit() {
        this.getTests();
        this.cols = [
            { field: 'equipmentId', header: 'Equipment ID' },
            { field: 'equipmentName', header: 'Equipment Name' },
            { field: 'type', header: 'Test Type' },
            { field: 'date', header: 'Date' },
            { field: 'result', header: 'Result' },
        ];
    }

    getTests() {
        const tests = this._crudService.getAll('test') as ITest[];
        const equipments = this.getEquipments();
        this.tests = this.addEquipmentName(tests, equipments);
    }

    getEquipments() {
        return this._crudService.getAll('equipment') as IMachine[];
    }

    // preapra la información obtenida para el formato en el que se va a necesitar
    addEquipmentName(tests: ITest[], equipments: IMachine[]): ITest[] {
        return tests.map((test) => {
            const equipment = equipments.find(
                (equipment) => equipment._id === test.equipmentId
            );
            return {
                ...test,
                equipmentName: equipment ? equipment.name : 'Unknown',
            };
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
