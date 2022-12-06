import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[LoadingSpinnerComponent]

})
export class SharedModule { }
