import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CompanyAtualizationComponent } from "./company-atualization/company-atualization.component";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyRegistrationComponent } from "./company-registration/company-registration.component";
import { CompanyRemovalComponent } from "./company-removal/company-removal.component";

@NgModule({
    declarations:[
        CompanyAtualizationComponent,
        CompanyListComponent,
        CompanyRegistrationComponent,
        CompanyRemovalComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class CompanyModule {}