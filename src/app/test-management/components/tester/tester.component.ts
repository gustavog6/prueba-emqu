import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IMachine } from 'src/app/shared/interfaces/IMachine';
import { ITest } from 'src/app/shared/interfaces/ITest';
import { CrudService } from 'src/app/shared/services/crud.service';
import { TesterChangeService } from '../../services/tester-change.service';

@Component({
    selector: 'app-tester',
    templateUrl: './tester.component.html',
    styleUrl: './tester.component.scss',
})
export class TesterComponent implements OnInit {
    equipments!: IMachine[];

    test: ITest = null;

    equipmentControl = new FormControl(null, Validators.required);

    openDialog = false;

    constructor(private _crudService: CrudService, private _testChange: TesterChangeService) {}

    ngOnInit() {
        this.getEquipments();
    }

    getEquipments() {
        this.equipments = this._crudService.getAll('equipment') as IMachine[];
    }

    generateRandomITest() {
        const result = Math.random() < 0.5 ? 'pass' : 'fail';
        setTimeout(() => {
            this.test = {
                _id: '1',
                equipmentId: this.equipmentControl.value,
                type: 'ping',
                date: new Date().toISOString(),
                result: result,
            };
			this.saveTest();
        }, 1000);

    }

	saveTest() {
		this._crudService.save('test', this.test);
        this._testChange.newTest(true);
	}

    closeDialog() {
        this.openDialog = false;
        // this._dialogService.announceDialogClosed();
        // this.init();
    }
}
