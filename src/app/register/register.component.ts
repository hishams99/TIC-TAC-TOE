import { Component, OnInit,} from '@angular/core';
import { RegisterModel } from '../models/register.model';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
    user: RegisterModel = new RegisterModel();
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder){}

    ngOnInit(){
        this.registerForm = this.formBuilder.group({
        'name': [this.user.name, [
            Validators.required
        ]],
        'email': [this.user.email, [
    Validators.required,
    Validators.email

        ]],
        'password': [this.user.password, [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(10)

        ]]
        });
    }

OnRegisterSubmit(){
    alert(this.user.name + ' ' + this.user.email+ ' ' + this.user.password);
}




}
