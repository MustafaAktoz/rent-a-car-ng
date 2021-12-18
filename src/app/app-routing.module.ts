import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/user/account/account.component';
import { AddBrandComponent } from './components/admin/adds/add-brand/add-brand.component';
import { AddCarImageComponent } from './components/admin/adds/add-car-image/add-car-image.component';
import { AddCarComponent } from './components/admin/adds/add-car/add-car.component';
import { AddColorComponent } from './components/admin/adds/add-color/add-color.component';
import { ListBrandComponent } from './components/admin/lists/list-brand/list-brand.component';
import { ListCarComponent } from './components/admin/lists/list-car/list-car.component';
import { ListColorComponent } from './components/admin/lists/list-color/list-color.component';
import { ListCustomerComponent } from './components/admin/lists/list-customer/list-customer.component';
import { ListRentalComponent } from './components/admin/lists/list-rental/list-rental.component';
import { UpdateBrandComponent } from './components/admin/updates/update-brand/update-brand.component';
import { UpdateCarComponent } from './components/admin/updates/update-car/update-car.component';
import { UpdateColorComponent } from './components/admin/updates/update-color/update-color.component';
import { CarDetailComponent } from './components/public/car-detail/car-detail.component';
import { CarComponent } from './components/public/car/car.component';
import { LoginComponent } from './components/public/login/login.component';
import { PaymentComponent } from './components/user/payment/payment.component';
import { RegisterComponent } from './components/public/register/register.component';
import { RentInformationComponent } from './components/user/rent-information/rent-information.component';
import { RentComponent } from './components/user/rent/rent.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { RentalHistoryComponent } from './components/user/rental-history/rental-history.component';
import { SavedCardsComponent } from './components/user/saved-cards/saved-cards.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"car-detail/:carId",component:CarDetailComponent},

  {path:"list/car",component:ListCarComponent,canActivate:[AdminGuard]},
  {path:"list/brand",component:ListBrandComponent,canActivate:[AdminGuard]},
  {path:"list/color",component:ListColorComponent,canActivate:[AdminGuard]},
  {path:"list/customer",component:ListCustomerComponent,canActivate:[AdminGuard]},
  {path:"list/rental",component:ListRentalComponent,canActivate:[AdminGuard]},

  {path:"add/car",component:AddCarComponent,canActivate:[AdminGuard]},
  {path:"add/brand",component:AddBrandComponent,canActivate:[AdminGuard]},
  {path:"add/color",component:AddColorComponent,canActivate:[AdminGuard]},
  {path:"add/car-image/:carId",component:AddCarImageComponent,canActivate:[AdminGuard]},
  {path:"rent/car/:carId",component:RentComponent,canActivate:[LoginGuard]},
  {path:"payment",component:PaymentComponent,canActivate:[LoginGuard]},

  {path:"update/car/:carId",component:UpdateCarComponent,canActivate:[AdminGuard]},
  {path:"update/color/:colorId",component:UpdateColorComponent,canActivate:[AdminGuard]},
  {path:"update/brand/:brandId",component:UpdateBrandComponent,canActivate:[AdminGuard]},

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"account",component:AccountComponent,canActivate:[LoginGuard]},
  {path:"rent-information",component:RentInformationComponent,canActivate:[LoginGuard]},
  {path:"rental-history",component:RentalHistoryComponent,canActivate:[LoginGuard]},
  {path:"saved-cards",component:SavedCardsComponent,canActivate:[LoginGuard]},

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
