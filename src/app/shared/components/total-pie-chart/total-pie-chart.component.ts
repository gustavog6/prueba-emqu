import { Component, Input } from '@angular/core';
import { IStatistics } from '../../interfaces/IStatistics';

@Component({
  selector: 'app-total-pie-chart',
  templateUrl: './total-pie-chart.component.html',
  styleUrl: './total-pie-chart.component.scss'
})
export class TotalPieChartComponent {
	@Input() data: IStatistics;
	
	pieData: any;
	pieOptions: any;

	constructor(){}

    ngOnInit() {
		this.initChart();
	}

	initChart(){ 
		const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

		this.pieData = {
            labels: ['Pass', 'Fail'],
            datasets: [
                {
                    data: [this.data.totalPass, this.data.totalFail],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--indigo-400'),
                        documentStyle.getPropertyValue('--purple-400'),
                    ]
                }]
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
	}
}
