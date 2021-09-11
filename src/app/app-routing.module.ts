import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'clients', component: ClientsComponent},
  {path:'company-detail', component: CompanyDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
