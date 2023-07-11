import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'exchange-component',
  templateUrl: './exchange-sell.component.html',
  styleUrls: ['./exchange-sell.component.css']
})
export class ExchangeSellComponent implements OnInit{



  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }



  goToMyProfile(){
    this.router.navigate(['/my-profile']);
  }
}
