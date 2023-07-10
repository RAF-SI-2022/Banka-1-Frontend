import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'credit-request-popup',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.css']
})
export class CreditRequestComponent implements OnInit {

  message: string = "";
  displayStyle = "none";

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  openPopup(message: string){
    this.message = message;
    this.displayStyle = "flex";
  }

  closePopup() {
    this.displayStyle = "none";
  }
  cancel(): void {
    this.location.back();
  }
}
