import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderStatusEnum} from "../../../model/orders/order-status-enum";
import {CurrentUserService} from "../../../services/user/current-user.service";
import {OrdersService} from "../../../services/orders/orders.service";
import {PopupComponent} from "../../popup/popup/popup.component";
import {MyOption} from "../../../model/orders/option-order";
import {OptionsService} from "../../../services/options/options.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any = [];
  optionsForOrders: string[] = ['Sve', 'Završene', 'Odobrene', 'Odbijene', 'Na čekanju']
  done: boolean | null = null;
  userId: number = -1;
  orderStatus: OrderStatusEnum | null = null;
  options: MyOption[] = [];

  loading: boolean = false;
  loadingOptions: boolean = false;

  @ViewChild(PopupComponent)
  popupComponent!: PopupComponent;

  constructor(private currentUserService: CurrentUserService, private ordersService: OrdersService, private optionsService: OptionsService) { }

  ngOnInit(): void {
    this.userId = this.currentUserService.getUserId();
    this.getOrders();
    this.getOptions();
  }

  getOrders(){
    this.loading = true;

    this.ordersService.getUserOrders(this.orderStatus, this.done, this.userId).subscribe(
      (data) => {
        this.orders = data;
        this.loading = false;
      },
      (error) => {
        this.popupComponent.openPopup(error.message);
        this.loading = false;
      }
    );
  }

  getOptions(){
    this.loadingOptions = true;

    this.optionsService.getMyOptions().subscribe(
      (data) => {
        this.options = data;
        this.loadingOptions = false;
      },
      (error) => {
        this.popupComponent.openPopup(error.message);
        this.loadingOptions = false;
      }
    );
  }

  finalizeOption(id: number){
    this.loadingOptions = true;

    this.optionsService.finaliseOption(id).subscribe(
      () => {
        this.removeOption(id);
        this.loadingOptions = false;
      },
      (error) => {
        this.popupComponent.openPopup(error.message);
        this.loadingOptions = false;
      }
    );
  }

  rejectOption(id: number){
    this.loadingOptions = true;

    this.optionsService.rejectOption(id).subscribe(
      () => {
        this.removeOption(id);
        this.loadingOptions = false;
      },
      (error) => {
        this.popupComponent.openPopup(error.message);
        this.loadingOptions = false;
      }
    )
  }

  removeOption(optionId: number){
    this.options = this.options.filter(function (option){
      return option.id !== optionId;
    })
  }

  refresh(){
    this.getOrders();
  }

  onOption(value: string){
    switch (value) {
      case 'Sve':
        this.orderStatus = null;
        this.done = null;
        break;
      case 'Završene':
        this.orderStatus = null;
        this.done = true;
        break;
      case 'Odobrene':
        this.orderStatus = OrderStatusEnum.APPROVED;
        this.done = null;
        break;
      case 'Odbijene':
        this.orderStatus = OrderStatusEnum.REJECTED;
        this.done = null;
        break;
      case 'Na čekanju':
        this.orderStatus = OrderStatusEnum.ON_HOLD;
        this.done = null;
        break;
      default:
        this.orderStatus = null;
        this.done = null;
    }

    this.getOrders();
  }
}
