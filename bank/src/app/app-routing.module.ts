import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginGuard} from "./guards/login.guard";
import {ListUsersComponent} from "./components/users/list-users/list-users.component";
import {AddUserComponent} from "./components/users/add-user/add-user.component";
import {UpdateUserComponent} from "./components/users/update-user/update-user.component";
import {MyProfileComponent} from "./components/users/my-profile/my-profile.component";
import {LoginComponent} from "./components/users/login/login.component";
import {
  ResetPasswordRequestComponent
} from "./components/users/reset-password-request/reset-password-request.component";
import {ResetPasswordComponent} from "./components/users/reset-password/reset-password.component";
import {ActivatePasswordComponent} from "./components/users/activate-password/activate-password.component";
import {UserRoleEnum} from "./model/user/user-role-enum";
import {ExchangeBuyComponent} from "./components/Exchange-buy/exchange-buy.component";
import {ExchangeComponent} from "./components/Exchange-rate/exchange.component";
import {CardComponent} from "./components/Card_list/card.component";
import {ExchangeSellComponent} from "./components/Exchange-sell/exchange-sell.component";
import {CreditComponent} from "./components/Credit/credit.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "users",
    component: ListUsersComponent,
    canActivate: [LoginGuard],
    data: {roles: [UserRoleEnum.ROLE_ADMIN]}
  },
  {
    path: "add-user",
    component: AddUserComponent,
    canActivate: [LoginGuard],
    data: {roles: [UserRoleEnum.ROLE_ADMIN]}
  },
  {
    path: "update-user/:userId",
    component: UpdateUserComponent,
    canActivate: [LoginGuard],
    data: {roles: [UserRoleEnum.ROLE_ADMIN]}
  },
  {
    path: "my-profile",
    component: MyProfileComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "reset-password-request",
    component: ResetPasswordRequestComponent,
  },
  {
    path: "activate-password/:userId",
    component: ActivatePasswordComponent,
  },
  {
    path: "reset-password/:userId",
    component: ResetPasswordComponent,
  },
  {
    path: "card-component",
    component: CardComponent,
  },
  {
    path: "credit-component",
    component: CreditComponent,
  },
  {
    path: "exchange-buy",
    component: ExchangeBuyComponent,
  },
  {
    path: "exchange-rate",
    component: ExchangeComponent,
  },
  {
    path: "exchange-sell",
    component: ExchangeSellComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
