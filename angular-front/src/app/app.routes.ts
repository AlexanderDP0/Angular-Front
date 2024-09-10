import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { userInfo } from 'os';

export const routes: Routes = [
  { path: 'user-component', component: UserComponent },
  { path: '', component: HomeComponent },
  { path: 'footer-component', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
