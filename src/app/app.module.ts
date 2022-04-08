import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainViewComponent } from './main-view/main-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule, 
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }