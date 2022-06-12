import { Action, AnyAction } from 'redux';

export * from './store';
export * as actionCreators from "./actions";

export interface ManageContext<State = any, A extends Action = AnyAction> {
  state: State;
  dispatch: (action: A) => void;
}