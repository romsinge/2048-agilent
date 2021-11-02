import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { ActionTypes, edit } from './score.actions';

@Injectable()
export class ScoreEffects {
  editScore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.Edit),
      // 📤 Les tâches asynchrones peuvent être exécutées ici
      map(({ score }) => {
        return edit({ score });
      })
    )
  );

  constructor(private actions$: Actions) {}
}
