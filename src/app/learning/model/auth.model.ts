import { AuthStateInterface } from "../store/reducer/reducer"

export interface RegisterUserInterface{
    name:string
    email:string
    password:string
}

export interface AppStateInterface{

    auth:AuthStateInterface
  
}