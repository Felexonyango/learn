import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../../../store/actions/action';
import { isSubmittingSelector } from '../../../../store/selector/selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  //isSubmitting$: Observable<boolean>; 
  
  constructor(
    private fb: FormBuilder,
    private store:Store
    
    ) { }

  ngOnInit(): void {
    this.intializeForm();
  //this.intializeValues()
  }
  // intializeValues():void{
  //   this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  // }

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
   this.form.reset()
    


  
  }


}
