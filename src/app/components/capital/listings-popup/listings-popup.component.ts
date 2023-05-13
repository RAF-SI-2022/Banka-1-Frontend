import {Component, OnInit} from '@angular/core';
import {Listing} from "../../../model/capital/listing";
import {catchError, Observable, throwError} from "rxjs";
import {CurrentUserService} from "../../../services/user/current-user.service";
import {StocksService} from "../../../services/stocks/stocks.service";
import {StockDetailComponent} from "../../stock-market/stock-detail/stock-detail.component";

@Component({
  selector: 'app-listings-popup',
  templateUrl: './listings-popup.component.html',
  styleUrls: ['./listings-popup.component.css']
})
export class ListingsPopupComponent implements OnInit{

  displayStyle: string = "none"
  listings: Listing[] = [];

  constructor(private stocksService: StocksService, private stockDetail: StockDetailComponent) {
  }

  ngOnInit(): void {
  }



  openPopUp(listings: Listing[]): void{
    this.listings = listings;
    this.displayStyle = "block"

    for(let i=0; i<listings.length ; i++){
      this.stockDetail.getStockDataBySymbol()
      this.stocksService.getStockBySymbol(listings[i].symbol);
    }

  }



  closePopUp(): void{
    this.displayStyle = "none"
  }


}
