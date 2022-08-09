import { createAction, props } from '@ngrx/store';
import { IRegister } from '../../model/auth.model';

import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
   ActionTypes.REGISTER,
  props<{ request:IRegister}>()
);