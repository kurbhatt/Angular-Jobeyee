import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/userlist.component';

const routes: Routes = [
    { path: 'register', component:RegisterComponent },
    { path: 'list', component:UserListComponent },
    { path: '', redirectTo: 'register', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
