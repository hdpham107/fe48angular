import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';

import { AuthenicationRoutingModule } from './authentication-routing.module';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, LayoutComponent],
  imports: [
    CommonModule,
    AuthenicationRoutingModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
