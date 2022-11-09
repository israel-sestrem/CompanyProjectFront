import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CompanyRegistrationComponent } from './company/company-registration/company-registration.component';
import { AtualizationComponent } from './company/atualization/atualization.component';
import { CompanyAtualizationComponent } from './company/company-atualization/company-atualization.component';
import { CompanyRemovalComponent } from './company/company-removal/company-removal.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { AddressRemovalComponent } from './address/address-removal/address-removal.component';
import { AddressAtualizationComponent } from './address/address-atualization/address-atualization.component';
import { AddressRegistrationComponent } from './address/address-registration/address-registration.component';
import { ContactRegistrationComponent } from './contact/contact-registration/contact-registration.component';
import { ContactAtualizationComponent } from './contact/contact-atualization/contact-atualization.component';
import { ContactRemovalComponent } from './contact/contact-removal/contact-removal.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyRegistrationComponent,
    AtualizationComponent,
    CompanyAtualizationComponent,
    CompanyRemovalComponent,
    CompanyListComponent,
    AddressListComponent,
    AddressRemovalComponent,
    AddressAtualizationComponent,
    AddressRegistrationComponent,
    ContactRegistrationComponent,
    ContactAtualizationComponent,
    ContactRemovalComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ErrorsModule,
    HomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
