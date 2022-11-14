import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        NgbModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent
    ]
})
export class FixedModule{}