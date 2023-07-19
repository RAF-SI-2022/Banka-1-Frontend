import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Option} from "../../model/stocks/stock";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CurrentUserService} from "../user/current-user.service";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  private optionsUrl = environment.optionsUrl;
  private optionsTradeUrl = environment.ordersUrl;
  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + sessionStorage.getItem("jwt-stock-market")
  });

  constructor(private httpClient: HttpClient, private currentUserService: CurrentUserService, private datePipe: DatePipe) {
    this.currentUserService.isLoggedIn.subscribe((loggedIn) => {
      if(loggedIn){
        this.headers = new HttpHeaders({
          'Authorization': 'Bearer ' + sessionStorage.getItem("jwt-stock-market")
        });
      }
    });
  }

  getOptions(expirationDate: Date | null, symbol: string): Observable<any> {
    return this.httpClient.post<Option[]>(this.optionsUrl,
      {
        expirationDate: this.datePipe.transform(expirationDate, "yyyy-MM-dd"),
        symbol: symbol
      },
      {
        headers: this.headers
      }).pipe(
      catchError(err => {
        return throwError(() => new Error(err.error.message))
      })
    )
  }

  tradeOption(optionId: number, date: Date, price: number): Observable<any>{
    return this.httpClient.post(this.optionsTradeUrl + '/option/bet/' + optionId, {
      bet: price,
      date: date
      },
      {
        headers: this.headers
      }).pipe(
      catchError(err => {
        return throwError(() => new Error(err.error.message))
      })
    )
  }

  getMyOptions(): Observable<any>{
    return this.httpClient.get(this.optionsTradeUrl + '/options/myBets', {
      headers: this.headers
    }).pipe(
      catchError(err => {
        return throwError(() => new Error(err.error.message))
      })
    )
  }

  rejectOption(id: number): Observable<any>{
    return this.httpClient.delete(this.optionsTradeUrl + '/option/reject/' + id, {
      headers: this.headers
    }).pipe(
      catchError(err => {
        return throwError(() => new Error(err.error.message))
      })
    )
  }

  finaliseOption(id: number): Observable<any>{
    return this.httpClient.post(this.optionsTradeUrl + '/options/finish-bet/' + id, {},{
      headers: this.headers
    }).pipe(
      catchError(err => {
        return throwError(() => new Error(err.error.message))
      })
    )
  }

}
