import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../reducer/reducer';
import { AppState} from '../state/appState';

 
export const authFeatureSelector =createFeatureSelector
<AppState, AuthState>('auth')

export const isSubmittingSelector =createSelector(
    authFeatureSelector,
    (authState:AuthState)=>authState.isSubmitting)