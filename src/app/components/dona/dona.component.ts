import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input('titulo') public legenda: string = 'Gráfica';

  @Input('labels') public doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input('data') public doughnutChartData: MultiDataSet = [
    [70, 80, 90]
  ];
  @Input('chartType') public doughnutChartType: ChartType = 'doughnut';
  @Input('colors') public colors: Color[] = [
    {
      backgroundColor: ['#0a1931','#185adb','#ffc947']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
