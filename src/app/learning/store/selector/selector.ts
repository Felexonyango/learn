import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../model/auth.model';
import { AuthStateInterface } from '../reducer/reducer';

 
export const authFeatureSelector =createFeatureSelector
<AppStateInterface, AuthStateInterface>('auth')

export const isSubmittingSelector =createSelector(
    authFeatureSelector,
    (authState:AuthStateInterface)=>authState.isSubmitting)