import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, MachineResponse } from './machine/machine.model';


@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http:HttpClient) { }

  getAllMachine(){
    return this.http.get<Response>('https://myfirstiiotapp.herokuapp.com/api/machines?api_key=gKGfPhA2Sz5Rbzmw');
  }

  getDetails(machine: string) {
    return this.http.get<MachineResponse>('https://myfirstiiotapp.herokuapp.com/api/metrics/'+machine+'?api_key=gKGfPhA2Sz5Rbzmw');
  }
}
