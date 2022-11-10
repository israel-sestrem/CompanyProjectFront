import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FixedModule } from "../fixed/fixed.module";
import { AddressAtualizationComponent } from "./address-atualization/address-atualization.component";
import { AddressListComponent } from "./address-list/address-list.component";
import { AddressRegistrationComponent } from "./address-registration/address-registration.component";
import { AddressRemovalComponent } from "./address-removal/address-removal.component";

@NgModule({
    declarations:[
        AddressAtualizationComponent,
        AddressListComponent,
        AddressRegistrationComponent,
        AddressRemovalComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FixedModule
    ]
})
export class AddressModule{}