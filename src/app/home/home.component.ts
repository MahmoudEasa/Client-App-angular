import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Code With Saad";
  number = 0;
  names = ["Ahmed", "Mahmoud", "Mohamed", "Kamel", "Hadeer", "Rana"];
  cssClass = "btn btn-danger";
  link = "https://www.google.com";
  school = 'fffff';

  constructor() { }

  ngOnInit(): void {
  }

  changeNumber() {
    this.number += 1;
  }
  changeNumberRest() {
    this.number = 0;
  }
  changeNumber2() {
    this.number -= 1;
  }
  changeTitle() {
    this.title = "www.codewithsaad.com";
  }
  addName() {
    this.names.push(this.number.toString());
    console.log(this.names);
  }

}
