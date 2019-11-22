import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateOrderComponent} from './create-order/create-order.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {OrderListComponent} from './order-list/order-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UpdateOrderComponent} from './update-order/update-order.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {JwPaginationComponent} from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    OrderDetailsComponent,
    OrderListComponent,
    UpdateOrderComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
