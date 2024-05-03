import { Component, OnInit } from '@angular/core';
import { IMachine } from 'src/app/shared/interfaces/IMachine';
import { IStatistics } from 'src/app/shared/interfaces/IStatistics';
import { ITest } from 'src/app/shared/interfaces/ITest';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrl: './statistics.component.scss',
})
export class StatisticsComponent implements OnInit {
    statistics!: IStatistics;
	equipments!: IMachine[];

    constructor(private _crudService: CrudService) {}

    ngOnInit() {
		this.getStatistics();
		this.getEquipment();
	}

	private getStatistics() {
		const statistics = this._crudService.getById('statistic', '1') as IStatistics;
        const tests = this.getTests();
        this.statistics = this.addTestDateToStats(statistics, tests);
    }

    private getTests() {
        return this._crudService.getAll('test') as ITest[];
    }

    private getEquipment() {
		this.equipments =  this._crudService.getAll('equipment') as IMachine[];
    }

	// preapra la información obtenida para el formato en el que se va a necesitar
	addTestDateToStats(statistics: IStatistics, tests: ITest[]): IStatistics {
		return {
			...statistics,
			stats: statistics.stats.map((stat) => {
				const test = tests.find(
					(test) => test._id === stat.testId
				);
				return {
					...stat,
					date: test ? test.date : 'Unknown',
				};
			}),
		};
	}	
}
