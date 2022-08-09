import { Action, createReducer, on } from "@ngrx/store";
import { registerAction } from "../actions/action";


export interface AuthState{
    isSubmitting: boolean;
   
  }
  
 const initialState: AuthState = {
 isSubmitting: false
 
}



const authReducer = createReducer(initialState,on(

    registerAction,(state):AuthState=>({...state,isSubmitting:true})
))

export function reducer(state: AuthState, action: Action){
    return authReducer(state,action)
}