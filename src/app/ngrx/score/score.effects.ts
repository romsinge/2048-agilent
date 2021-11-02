import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionTypes } from './score.actions';

@Injectable()
export class MovieEffects {
  // loadMovies$ = createEffect(() =>
  //   this.actions$.pipe(ofType(ActionTypes.Edit))
  // );

  constructor(private actions$: Actions) {}
}
