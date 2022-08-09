import { createAction, props } from '@ngrx/store';
import { RegisterUserInterface } from '../../model/auth.model';

import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
   ActionTypes.REGISTER,
  props<{ request:RegisterUserInterface }>()
);