import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenicationRoutingModule } from './authentication-routing.module';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, LayoutComponent],
  imports: [CommonModule, AuthenicationRoutingModule],
})
export class AuthenticationModule {}
