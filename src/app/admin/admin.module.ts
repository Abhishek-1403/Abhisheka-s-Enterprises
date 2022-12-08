import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ManageOrdersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule

  ],
  exports:[ManageOrdersComponent]
})
export class AdminModule { }
