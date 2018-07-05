import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';



@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    data: User;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
    ) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            phone: [null, [Validators.required]],
            address: [null, [Validators.required]],
        });
    }

    register() {
        console.log(this.registerForm.valid, this.registerForm.value);
        this.userService.getRegister(this.registerForm.value).subscribe(d => {
            this.data = d;
        });
    }
}
