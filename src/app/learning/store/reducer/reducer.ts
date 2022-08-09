import { Action, createReducer, on } from "@ngrx/store";
import { registerAction } from "../actions/action";


export interface AuthStateInterface {
    isSubmitting: boolean;
   
  }
  
 const initialState: AuthStateInterface = {
 isSubmitting: false
}



const authReducer = createReducer(initialState,on(

    registerAction,(state):AuthStateInterface=>({...state,isSubmitting:true})
))

export function reducer(state: AuthStateInterface, action: Action){
    return authReducer(state,action)
}