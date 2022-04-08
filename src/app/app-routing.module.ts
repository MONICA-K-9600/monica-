import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from "./main-view/main-view.component";
const router: Routes=[
    {path:'',component:MainViewComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(router)],
    exports:[RouterModule]
})
export class AppRoutingModule{}