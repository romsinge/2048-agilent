import { createAction, props } from '@ngrx/store';

export const edit = createAction('[Score] Edit', props<{ score: number }>());
export const reset = createAction('[Score] Reset');
