import {Component, ViewChild} from '@angular/core';
import {CompanyModel} from "../../model/account/company-model";
import {AccountService} from "../../services/account/account.service";
import {CompanyService} from "../../services/company/company.service";
import {Router} from "@angular/router";
import {PopupComponent} from "../popup/popup/popup.component";

@Component({
  selector: 'app-legal-persons',
  templateUrl: './legal-persons.component.html',
  styleUrls: ['./legal-persons.component.css']
})
export class LegalPersonsComponent {
  @ViewChild(PopupComponent)
  popupComponent!: PopupComponent;

  legalPersons: CompanyModel[] = [];
  naziv: string = "";
  pib: string = "";
  maticniBroj: string = "";
  sifraDelatnosti: string = "";
  error: string = "";

  loading: boolean = false;

  constructor(private companyService: CompanyService, private accountService: AccountService, private route: Router) {
  }

  ngOnInit(): void {
    this.listLegalPersons();
  }

  createCompany() {
    this.route.navigate(["/create-company"])
  }

  listLegalPersons() {
    this.loading = true;
    this.companyService.listCompanies().subscribe({
      next: (allCompanies) => {
        this.legalPersons = allCompanies;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.popupComponent.openPopup(error.message);
      }
    })
  }


  listLegalPersonsFiltered() {
    this.loading = true;
    this.companyService.listCompaniesFilter(this.naziv, this.pib, this.maticniBroj, this.sifraDelatnosti).subscribe({
      next: (allCompanies) => {
        this.legalPersons = allCompanies;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.popupComponent.openPopup(error.message);
      }
    })
  }
}
