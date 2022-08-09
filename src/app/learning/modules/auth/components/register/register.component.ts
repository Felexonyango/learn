import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/learning/service/auth/auth.service';
import { AppState } from 'src/app/learning/store/state/appState';
import { registerAction } from '../../../../store/actions/action';
import { isSubmittingSelector } from '../../../../store/selector/selector';
import { IRegister } from '../../../../model/auth.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
 
  
  form: FormGroup = new FormGroup({});
     public isSubmitting$: Observable<boolean> | undefined;
     
  constructor(
    private fb: FormBuilder,
    private store:Store<AppState>,
    private authService:AuthService
    
    ) { }

  ngOnInit(): void {
    this.intializeForm();
   this.intializeValues()
  }
  intializeValues():void{
    
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  intializeForm(){
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required,Validators.minLength(6)]],
     
    });
   
  
  }

  Submit():void{


   console.log(this.form.value)
   
     this.store.dispatch(registerAction(this.form.value))
     this.authService.register(this.form.value).subscribe((data:IRegister)=>{
        console.log( "user", data)
     })
      this.form.reset()
    


  
  }


}
