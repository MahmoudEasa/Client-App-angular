import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  custumers = [
    { ssn: "1111111111111", name: "Ahmed", age: 15, gender: "male" },
    { ssn: "222222222222", name: "Mahmoud", age: 31, gender: "male" },
    { ssn: "33333333333333", name: "Mohamed", age: 38, gender: "male" },
    { ssn: "4444444444444", name: "Hala", age: 22, gender: "female" },
    { ssn: "222222222222", name: "Rabab", age: 25, gender: "female" },
    { ssn: "33333333333333", name: "Amira", age: 23, gender: "female" },
    { ssn: "4444444444444", name: "Nada", age: 20, gender: "female" },
  ]


  // Task
  customersTask = [
    { id: 15, name: "Ahmed", age: 20, children: ["Kamal", "Hadeer", "Lamees"] },
    { id: 20, name: "Samir", age: 25, children: ["Mohamed", "Maha", "Samy"] },
    { id: 25, name: "Walaa", age: 30, children: ["Kamel", "Ra2fat", "Nehal"] },
    { id: 30, name: "Sama", age: 40, children: ["Saad", "Lamiaa", "Youssef"] }
  ]
  edit = "Edit";
  delete = "Delete";
  view = "View";

  toggle = false;
  text = "Open";
  constructor() { }

  ngOnInit(): void {
  }
  // Task
  task = false;
  textTask = "Open Data";
  getDataTask() {
    this.task = !this.task;
    this.textTask = this.task ? "Close Data" : "Open Data";
  }
  addCustumer() {
    this.custumers.push({ ssn: "555555555555", name: "Ali", age: 30, gender: "male" });
  }
  getData() {
    this.toggle = !this.toggle;

    this.text = this.toggle ? "Close" : "Open";
  }

}
