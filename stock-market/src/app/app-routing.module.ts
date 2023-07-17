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
import {StockMainComponent} from "./components/stock-market/stock-main/stock-main.component";
import {StockDetailComponent} from "./components/stock-market/stock-detail/stock-detail.component";
import {ForexDetailComponent} from "./components/stock-market/forex-detail/forex-detail.component";
import {CapitalMainComponent} from "./components/capital/capital-main/capital-main.component";
import {OptionsComponent} from "./components/stock-market/options/options.component";
import {OrdersComponent} from "./components/orders/orders/orders.component";
import {CompaniesComponent} from "./components/companies/companies/companies.component";
import {ContractsComponent} from "./components/contracts/contracts/contracts.component";
import {CompanyDetailsComponent} from "./components/companies/company-details/company-details.component";
import {TradesComponent} from "./components/trades/trades/trades.component";
import {TradesForexComponent} from "./components/trades/trades-forex/trades-forex.component";
import {OrdersAdminComponent} from "./components/orders/orders-admin/orders-admin.component";
import {EmployeesComponent} from "./components/employees/employees-list/employees.component";
import {AddContractComponent} from "./components/contracts/add-contract/add-contract.component";
import {UpdateContractComponent} from "./components/contracts/update-contract/update-contract.component";
import {CreateCompanyPopupComponent} from "./components/companies/create-company-popup/create-company-popup.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "stock-market",
    component: StockMainComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "stock-detail",
    component: StockDetailComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "forex-detail",
    component: ForexDetailComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "trades-stocks/:symbol",
    component: TradesComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "trades-forex/:fromC/:toC",
    component: TradesForexComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "options/:symbol",
    component: OptionsComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "capital",
    component: CapitalMainComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "orders",
    component: OrdersComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "orders-admin",
    component: OrdersAdminComponent,
    canActivate: [LoginGuard],
    data: {roles: [UserRoleEnum.ROLE_ADMIN, UserRoleEnum.ROLE_SUPERVISOR]}
  },
  {
    path: "employees",
    component: EmployeesComponent,
    canActivate: [LoginGuard],
    data: {roles: [UserRoleEnum.ROLE_ADMIN, UserRoleEnum.ROLE_SUPERVISOR]}
  },
  {
    path: "companies",
    component: CompaniesComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "company-details/:id",
    component: CompanyDetailsComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "create-company-popup",
    component: CreateCompanyPopupComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "contracts",
    component: ContractsComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "contracts/create",
    component: AddContractComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
  },
  {
    path: "contracts/update/:contractId",
    component: UpdateContractComponent,
    canActivate: [LoginGuard],
    data: {roles: []}
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
