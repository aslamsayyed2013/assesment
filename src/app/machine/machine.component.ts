import { MachineService } from './../machine.service';
import { Component, OnInit } from '@angular/core';
import {  MachineResponse } from './machine.model';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

   data:string[] =[];
   selectedValue: any;
   temperature: any;
   temperaturValue: any;
   pressure: any;
   pressuerValue: any;
   chart: any = []

  constructor(private service:MachineService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.service.getAllMachine()
    .subscribe({
      next:(resp)=>{
        this.data=resp.data;
        console.log(this.data);
      }
    })
  }

  getDetails(){
    this.service.getDetails(this.selectedValue)
    .subscribe({
      next:(machineResponse:MachineResponse)=>{
        this.temperature=machineResponse.data[0]?.data[0]?.key;
        this.temperaturValue=machineResponse.data[0]?.data[0]?.value;
        this.pressure=machineResponse.data[0]?.data[0]?.key;
        this.pressuerValue=machineResponse.data[0]?.data[1]?.value;
      }
    })

    this.chart = new Chart('canvas', {
      type: 'line',
      data:{
        labels:this.temperature,
        datasets:[
          {
            label: 'Temperature',
            data: this.temperaturValue,
            borderWidth: 1,
            fill:false
          }
        ]
      }
    })
  }


}
