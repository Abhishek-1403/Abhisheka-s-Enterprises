import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';



@NgModule({
  declarations: [ManageOrdersComponent],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  exports:[ManageOrdersComponent]
})
export class AdminModule { }
