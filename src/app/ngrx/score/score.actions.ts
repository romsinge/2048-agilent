import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  Edit = '[Score] Edit',
}

export const edit = createAction(ActionTypes.Edit, props<{ score: number }>());
