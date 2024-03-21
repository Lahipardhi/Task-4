import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  input1Value!:number;
  input2Value!:number;
  validationmessage!:string;
  data:any;
  options:any;


  updateValues(){
    if(this.input1Value + this.input2Value >100){
      this.validationmessage='Incorrect Value';
    }else{
      this.validationmessage='';
      if(this.input1Value){
        this.input2Value=100-this.input1Value;
      }else if (this.input2Value){
        this.input1Value = 100-this.input2Value;
      }
    }
  }
  createchart(){
    this.data={
      labels:['Box1','Box2'],
      datasets:[{
        data:[this.input1Value,this.input2Value],
        backgroundColor:['orange','grey'],
        hoverBackgroundColor:['orange','grey']
      }]
    }
  }
  
}
