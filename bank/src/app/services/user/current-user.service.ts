import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import jwtDecode from "jwt-decode";
import {JwtPayload} from "../../model/user/jwt-payload";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private loggedInBehavior = new BehaviorSubject(this.getLoginStatus());
  isLoggedIn = this.loggedInBehavior.asObservable();

  constructor(private router: Router) { }

  //ovu metodu je potrebno pozvati kada login prodje uspesno
  setLogin(jwt: string){
    sessionStorage.setItem("jwt", jwt);
    this.loggedInBehavior.next(true);
  }

  getUserId(): number{
    let token = sessionStorage.getItem("jwt");
    if(token == null){
      return -1;
    }

    let decoded = jwtDecode<JwtPayload>(token);
    return decoded.userId;
  }

  //metoda vraca email trenutnog korisnika
  getUserEmail(): string | null{
    let token = sessionStorage.getItem("jwt");
    if(token == null){
      return null;
    }

    let decoded = jwtDecode<JwtPayload>(token);
    return decoded.sub;
  }

  getFirstUserLetter(): string{
    let token = sessionStorage.getItem("jwt");
    if(token == null){
      return "";
    }

    let decoded = jwtDecode<JwtPayload>(token);
    return decoded.sub.substring(0,1).toUpperCase();
  }

  //metoda proverava da li trenutni korisnik ima prosledjenu rolu
  checkUserRole(role: string): boolean{
    let token = sessionStorage.getItem("jwt");
    if(token == null){
      return false;
    }

    let decoded = jwtDecode<JwtPayload>(token);
    return decoded.roles.includes(role);
  }

  //vraca sve role trenutnog korisnika
  getUserRoles(): string[]{
    let token = sessionStorage.getItem("jwt");
    if(token == null){
      return [];
    }

    let decoded = jwtDecode<JwtPayload>(token);
    return decoded.roles;
  }

  getToken(): string{
    return sessionStorage.getItem("jwt") || "";
  }

  setLoggedInBehavior(loggedIn: boolean){
    this.loggedInBehavior.next(loggedIn);
  }

  private getLoginStatus(): boolean{
    return !!sessionStorage.getItem("jwt");
  }

  hasAnyRoles(): boolean{
    let token = sessionStorage.getItem("jwt");
    if(token == null){
      return false;
    }

    let decoded = jwtDecode<JwtPayload>(token);
    return decoded.roles.length > 0;
  }

  logout(){
    sessionStorage.removeItem("jwt");
    this.setLoggedInBehavior(false);
    this.router.navigate(['/login']);
  }

  logoutUnload(){
    sessionStorage.removeItem("jwt");
  }
}
