import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  address = "";
  addresses: string[] = [];
  changeAddress() {
    this.addresses.push(this.address);
    console.log(this.addresses);
  }


  // Task
  customars: any[] = [];

  ssn: any;
  name: any;
  addressC: any;
  age: any;
  gender1: boolean = false;

  gender() {
    this.gender1 = !this.gender1
  };
  getItems() {
    this.customars.push({
      ssn: this.ssn,
      name: this.name,
      addressC: this.addressC,
      age: this.age,
      gender: this.gender1 ? "Male" : "Female"
    });
    console.log(this.customars);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
