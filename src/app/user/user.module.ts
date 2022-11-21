import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FixedModule } from "../fixed/fixed.module";
import { UserAtualizationComponent } from "./user-atualization/user-atualization.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { UserRemovalComponent } from "./user-removal/user-removal.component";

@NgModule({
    declarations:[
        UserListComponent,
        UserAtualizationComponent,
        UserRegistrationComponent,
        UserRemovalComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FixedModule,
        RouterModule
    ]
})
export class UserModule{}