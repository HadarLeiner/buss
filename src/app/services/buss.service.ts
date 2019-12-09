import { Injectable } from '@angular/core';
import { bus_line, Passenger } from '../class/tergul';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BussService {

  pass = Array<Passenger>();
  p1 = { name: 'eliezer', age: 21 };
  p2 = { name: 'hadar', age: 22 };

  bus = new bus_line(291, "hachida", "bar-ilan", false, this.pass, 9.4);
  bus1 = new bus_line(291, "hachida", "bar-ilan", false, this.pass, 9.4);
  bus2 = new bus_line(291, "hachida", "bar-ilan", false, this.pass, 9.4);
  busArr = Array<bus_line>();
  constructor(private http: HttpClient) {
    this.pass.push(this.p1, this.p2);
    this.busArr.push(this.bus, this.bus1, this.bus2);

  }
  addBus() {
    let option = {
      host: 'localhost',
      port: 3000,
      path: '/allBusses'
    }
    console.log("joo");

    return this.http.get('http://localhost:3000/allBusses')
  }
  getListBus() {
    return this.busArr;
  }
  pushBus(b) {
    return this.http.post('http://localhost:3000/bussesTable', b)
  }
}
