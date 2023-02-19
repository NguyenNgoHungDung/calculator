import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from 'src/app/component/calculator/calculator.component';
import { StoreModule } from '@ngrx/store';
import { calculatorReducer } from 'src/app/ngrx/reducers/calculator.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      calculator: calculatorReducer
    }, {})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
