import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { FieldModule } from './field/field.module';
import { scoreReducer } from './ngrx/score/score.reducer';

@NgModule({
  declarations: [AppComponent, FieldComponent],
  imports: [
    BrowserModule,
    FieldModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      score: scoreReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
