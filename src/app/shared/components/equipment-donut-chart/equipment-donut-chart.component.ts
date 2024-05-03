import { Component, Input } from '@angular/core';
import { IStatistics } from '../../interfaces/IStatistics';
import { FormControl } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { IMachine } from '../../interfaces/IMachine';

@Component({
    selector: 'app-equipment-donut-chart',
    templateUrl: './equipment-donut-chart.component.html',
    styleUrl: './equipment-donut-chart.component.scss',
})
export class EquipmentDonutChartComponent {
    @Input() data: IStatistics;
    @Input() equipments: IMachine;

    donutData: any;
    donutOptions: any;
    totalPass: number = 0;
    totalFail: number = 0;
    total: number = 0;

    equipmentControl = new FormControl(null);

    constructor(private _crudService: CrudService) {
        this.getSelectedEquipment();
    }

    ngOnInit() { }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.donutData = {
            labels: ['Pass', 'Fail'],
            datasets: [
                {
                    data: [this.totalPass, this.totalFail],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--indigo-400'),
                        documentStyle.getPropertyValue('--purple-400'),
                    ],
                },
            ],
        };

        this.donutOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor,
                    },
                },
            },
        };
    }

    getSelectedEquipment() {
        this.equipmentControl.valueChanges.subscribe((res: any) => {
            const a = this.getEquipmentStats(this.data, res);
            this.initChart();
        });
    }

	// preapra la información obtenida para el formato en el que se va a necesitar
    getEquipmentStats(statistics: IStatistics, equipmentId: string) {
        const filteredStats = statistics.stats.filter(
            (stat) => stat.equipmentId === equipmentId
        );

        let totalPass = 0;
        let totalFail = 0;
        for (let stat of filteredStats) {
            if (stat.result === 'Pass') {
                totalPass++;
            } else if (stat.result === 'Fail') {
                totalFail++;
            }
        }

        this.totalPass = totalPass;
        this.totalFail = totalFail;
        this.total = totalPass + totalFail;
    }
}
