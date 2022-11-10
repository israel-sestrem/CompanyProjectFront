import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FixedModule } from "../fixed/fixed.module";
import { ContactAtualizationComponent } from "./contact-atualization/contact-atualization.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactRegistrationComponent } from "./contact-registration/contact-registration.component";
import { ContactRemovalComponent } from "./contact-removal/contact-removal.component";

@NgModule({
    declarations:[
        ContactAtualizationComponent,
        ContactListComponent,
        ContactRegistrationComponent,
        ContactRemovalComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FixedModule
    ]
})
export class ContactModule {}