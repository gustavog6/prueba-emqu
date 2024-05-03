import { Component, Input } from '@angular/core';
import { IStatistics } from '../../interfaces/IStatistics';

@Component({
  selector: 'app-monthly-linear-chart',
  templateUrl: './monthly-linear-chart.component.html',
  styleUrl: './monthly-linear-chart.component.scss'
})
export class MonthlyLinearChartComponent {
	@Input() data: IStatistics;

	lineData: any;
	lineOptions: any;

    ngOnInit() {
		this.initChart();
	}

	initChart(){ 
		const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

		let passData = new Array(6).fill(0);
		let failData = new Array(6).fill(0);
	
        // preapra la información obtenida para el formato en el que se va a necesitar
		for (let stat of this.data.stats) {
			let month = new Date(stat.date).getMonth();
	
			if (stat.result === 'Pass') {
				passData[month]++;
			} else if (stat.result === 'Fail') {
				failData[month]++;
			}
		}
		
		this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: passData,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-500'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: failData,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                    borderColor: documentStyle.getPropertyValue('--primary-200'),
                    tension: .4
                }
            ]
        };

        this.lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
            }
        };
	}
}
