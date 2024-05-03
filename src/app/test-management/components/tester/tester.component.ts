import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IMachine } from 'src/app/shared/interfaces/IMachine';
import { ITest } from 'src/app/shared/interfaces/ITest';
import { CrudService } from 'src/app/shared/services/crud.service';
import { TesterChangeService } from '../../services/tester-change.service';
import { IdGeneratorService } from 'src/app/shared/services/id-generator.service';
import { IStatistics } from 'src/app/shared/interfaces/IStatistics';

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

    constructor(
        private _crudService: CrudService,
        private _testChange: TesterChangeService,
        private _idGeneratorService: IdGeneratorService
    ) {}

    ngOnInit() {
        this.getEquipments();
    }

    getEquipments() {
        this.equipments = this._crudService.getAll('equipment') as IMachine[];
    }

    // genera tests con información random
    generateRandomITest() {
        const result = Math.random() < 0.5 ? 'Pass' : 'Fail';
        setTimeout(() => {
            this.test = {
                _id: this._idGeneratorService.createId(),
                equipmentId: this.equipmentControl.value,
                type: 'Ping',
                date: new Date().toISOString(),
                result: result,
            };
            this.saveTest();
            this.updateStatistics(this.test);
        }, 2500);
    }

    saveTest() {
        this._crudService.save('test', this.test);
        this._testChange.newTest(true);
    }

    // función que actualiza los registros de statistic en el local
    updateStatistics(test: ITest) {
        let statistics = this._crudService.getById('statistic', '1') as IStatistics;
        
        let newStat = {
            equipmentId: test.equipmentId,
            testId: test._id,
            result: test.result
        };
    
        statistics.stats.push(newStat);
        if (test.result === 'Pass') {
            statistics.totalPass++;
        } else if (test.result === 'Fail') {
            statistics.totalFail++;
        }
        statistics.total++;

        this._crudService.update('statistic', '1' , statistics)
    }

    closeDialog() {
        this.openDialog = false;
    }
}
