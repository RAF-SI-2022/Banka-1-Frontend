import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'credit-popup',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {

  message: string = "";
  displayStyle = "none";

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  openPopup(message: string){
    this.message = message;
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
  cancel(): void {
    this.location.back();
  }
