import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations:[
        SigninComponent,
        SignupComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class HomeModule {}