import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { RouterModule } from '@angular/router';



@Component({
  selector: 'exchange-buy-component',
  templateUrl: './exchange-buy.component.html',
  styleUrls: ['./exchange-buy.component.css']
})
export class ExchangeBuyComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }


}

