import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progressbar-page.component.css']
})
export class ProgressComponent implements OnInit {

  progreso1: number = 30;
  progreso2: number = 30;

  get getProgreso1(){
    return `${this.progreso1}%`;
  }

  set setProgreso1(value: number){
    this.progreso1 = value;
  }

  get getProgreso2(){
    return `${this.progreso2}%`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
