import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { RegisterService } from './register.service';


@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    providers: [RegisterService],
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private http: HttpClient,
        private registerService: RegisterService
    ) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            phone: [null, [Validators.required]],
            address: [null, [Validators.required]],
        });
    }

    // emailExisteValidation() {
    //     let control = this.registerForm.get('email'); 
    //     if (control.valid && control.dirty) {
    //         this.registerService.checkEmail(this.registerForm.controls['email'].value).subscribe(data => {
    //             if (data != 0)
    //                 return { "emailExistant": true };
    //         })
    //     }
    //     return null;
    // }

    register() {
        console.log(this.registerForm.valid, this.registerForm.value);
        this.registerService.getRegister(this.registerForm.value).subscribe(data => {
            console.log(data);
        });
    }
}