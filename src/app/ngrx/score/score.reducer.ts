import { Action, createReducer, on } from '@ngrx/store';
import { edit, reset } from './score.actions';

export const initialState = 0;

const _scoreReducer = createReducer(
  initialState,
  on(edit, (state, props) => props.score),
  on(reset, () => 0)
);

export function scoreReducer(state: any, action: any) {
  return _scoreReducer(state, action);
}
