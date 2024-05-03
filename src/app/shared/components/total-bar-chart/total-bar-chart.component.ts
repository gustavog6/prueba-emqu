import { Component, Input } from '@angular/core';
import { IStatistics } from '../../interfaces/IStatistics';

@Component({
  selector: 'app-total-bar-chart',
  templateUrl: './total-bar-chart.component.html',
  styleUrl: './total-bar-chart.component.scss'
})
export class TotalBarChartComponent {
	@Input() data: IStatistics;

	barData: any;
	barOptions: any;

    ngOnInit() {
		this.initChart();
	}

	initChart(){ 
		const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

		this.barData = {
            labels: ['Pass', 'Fail'],
            datasets: [
                {
                    label: '',
                    data: [this.data.totalPass, this.data.totalFail],
                    backgroundColor: [documentStyle.getPropertyValue('--primary-500'), documentStyle.getPropertyValue('--primary-200')],
                    borderColor: [documentStyle.getPropertyValue('--primary-500'), documentStyle.getPropertyValue('--primary-200'),],
                    borderWidth: 1
                }
            ]
        };

        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
	}
}
