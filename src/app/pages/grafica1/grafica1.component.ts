import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels1: Label[] = ['Pan', 'Refresco', 'Tacos'];
  public doughnutChartData1: MultiDataSet = [
    [350, 450, 100]
  ];
  public colors1: Color[] = [
    {
      backgroundColor: ['#6857E6','#009FEE','#F02059']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
