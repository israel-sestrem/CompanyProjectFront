import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressAtualizationComponent } from './address/address-atualization/address-atualization.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { AddressRegistrationComponent } from './address/address-registration/address-registration.component';
import { AddressRemovalComponent } from './address/address-removal/address-removal.component';
import { CompanyAtualizationComponent } from './company/company-atualization/company-atualization.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyRegistrationComponent } from './company/company-registration/company-registration.component';
import { CompanyRemovalComponent } from './company/company-removal/company-removal.component';
import { ContactAtualizationComponent } from './contact/contact-atualization/contact-atualization.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactRegistrationComponent } from './contact/contact-registration/contact-registration.component';
import { ContactRemovalComponent } from './contact/contact-removal/contact-removal.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { UserAuthenticatedGuard } from './services/guards/user-authenticated.guard';
import { UserNotAuthenticatedGuard } from './services/guards/user-not-authenticated.guard';
import { UserAtualizationComponent } from './user/user-atualization/user-atualization.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserRemovalComponent } from './user/user-removal/user-removal.component';

const routes: Routes = [
  { path: '',                     component: SigninComponent,              canActivate: [UserNotAuthenticatedGuard] },
  { path: 'signup',               component: SignupComponent,              canActivate: [UserNotAuthenticatedGuard] },
  { path: 'home',                 component: HomeComponent,                canActivate: [UserAuthenticatedGuard]    },
  { path: 'address',              component: AddressListComponent,         canActivate: [UserAuthenticatedGuard]    },
  { path: 'address/atualization', component: AddressAtualizationComponent, canActivate: [UserAuthenticatedGuard]    },
  { path: 'address/registration', component: AddressRegistrationComponent, canActivate: [UserAuthenticatedGuard]    },
  { path: 'address/removal',      component: AddressRemovalComponent,      canActivate: [UserAuthenticatedGuard]    },
  { path: 'company',              component: CompanyListComponent,         canActivate: [UserAuthenticatedGuard]    },
  { path: 'company/atualization', component: CompanyAtualizationComponent, canActivate: [UserAuthenticatedGuard]    },
  { path: 'company/registration', component: CompanyRegistrationComponent, canActivate: [UserAuthenticatedGuard]    },
  { path: 'company/removal',      component: CompanyRemovalComponent,      canActivate: [UserAuthenticatedGuard]    },
  { path: 'contact',              component: ContactListComponent,         canActivate: [UserAuthenticatedGuard]    },
  { path: 'contact/atualization', component: ContactAtualizationComponent, canActivate: [UserAuthenticatedGuard]    },
  { path: 'contact/registration', component: ContactRegistrationComponent, canActivate: [UserAuthenticatedGuard]    },
  { path: 'contact/removal',      component: ContactRemovalComponent,      canActivate: [UserAuthenticatedGuard]    },
  { path: 'user',                 component: UserListComponent,            canActivate: [UserAuthenticatedGuard]    },
  { path: 'user/atualization',    component: UserAtualizationComponent,    canActivate: [UserAuthenticatedGuard]    },
  { path: 'user/registration',    component: UserRegistrationComponent,    canActivate: [UserAuthenticatedGuard]    },
  { path: 'user/removal',         component: UserRemovalComponent,         canActivate: [UserAuthenticatedGuard]    },
  { path: '**',      component: NotFoundComponent,    canActivate: [UserAuthenticatedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
