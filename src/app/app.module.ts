import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/public/brand/brand.component';
import { ColorComponent } from './components/public/color/color.component';
import { NaviComponent } from './components/public/navi/navi.component';
import { ListCustomerComponent } from './components/admin/lists/list-customer/list-customer.component';
import { CarComponent } from './components/public/car/car.component';
import { CarDetailComponent } from './components/public/car-detail/car-detail.component';
import { ListRentalComponent } from './components/admin/lists/list-rental/list-rental.component';
import { CarDetailDtoFilterPipe } from './pipes/car-detail-dto-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { RentComponent } from './components/user/rent/rent.component';
import { PaymentComponent } from './components/user/payment/payment.component';

import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddCarComponent } from './components/admin/adds/add-car/add-car.component';
import { AddColorComponent } from './components/admin/adds/add-color/add-color.component';
import { AddBrandComponent } from './components/admin/adds/add-brand/add-brand.component';
import { ListCarComponent } from './components/admin/lists/list-car/list-car.component';
import { ListBrandComponent } from './components/admin/lists/list-brand/list-brand.component';
import { ListColorComponent } from './components/admin/lists/list-color/list-color.component';
import { ManagementOptionsComponent } from './components/admin/management-options/management-options.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { UpdateCarComponent } from './components/admin/updates/update-car/update-car.component';
import { UpdateBrandComponent } from './components/admin/updates/update-brand/update-brand.component';
import { UpdateColorComponent } from './components/admin/updates/update-color/update-color.component';
import { BrandNamePipe } from './pipes/brand-name.pipe';
import { ColorNamePipe } from './pipes/color-name.pipe';
import { LoginComponent } from './components/public/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AddCarImageComponent } from './components/admin/adds/add-car-image/add-car-image.component';
import { AccountComponent } from './components/user/account/account.component';
import { AccountOptionsComponent } from './components/user/account-options/account-options.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { RegisterComponent } from './components/public/register/register.component';
import { FindeksPointBoardComponent } from './components/user/findeks-point-board/findeks-point-board.component';
import { RentInformationComponent } from './components/user/rent-information/rent-information.component';
import { RentalHistoryComponent } from './components/user/rental-history/rental-history.component';
import { SavedCardsComponent } from './components/user/saved-cards/saved-cards.component';
import { CreditCardPipe } from './pipes/credit-card.pipe';
import { ShowPasswordDirective } from './drectives/show-password.directive';
import { SmallNumberInputComponent } from './form-controls/small-number-input/small-number-input.component';




@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    ListCustomerComponent,
    CarComponent,
    CarDetailComponent,
    ListRentalComponent,
    CarDetailDtoFilterPipe,
    BrandFilterPipe,
    ColorFilterPipe,
    RentComponent,
    PaymentComponent,
    AddCarComponent,
    AddColorComponent,
    AddBrandComponent,
    ListCarComponent,
    ListBrandComponent,
    ListColorComponent,
    ManagementOptionsComponent,
    CarFilterPipe,
    UpdateCarComponent,
    UpdateBrandComponent,
    UpdateColorComponent,
    BrandNamePipe,
    ColorNamePipe,
    LoginComponent,
    AddCarImageComponent,
    AccountComponent,
    AccountOptionsComponent,
    ChangePasswordComponent,
    RegisterComponent,
    FindeksPointBoardComponent,
    RentInformationComponent,
    RentalHistoryComponent,
    SavedCardsComponent,
    CreditCardPipe,
    ShowPasswordDirective,
    SmallNumberInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left'
    }),
    BrowserAnimationsModule,
    FileUploadModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
