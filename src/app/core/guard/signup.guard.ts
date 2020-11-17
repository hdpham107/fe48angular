import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from '../../authentication/signup/signup.component';

@Injectable({
  providedIn: 'root'
})
// import và gắn SignupComponent vào chỗ CanDeactivate<unknow> và component: unknow,
export class SignupGuard implements CanDeactivate<SignupComponent> {
  //  return true => cho phép ra khỏi page, và ngược lại
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isDirty: boolean = component.checkDirty();

    if (isDirty) {
      // Form trong component đã được thay đổi
      confirm("Bạn có chắc muốn rời khỏi !!!")
    }

    // Form chưa thay đổi => cho phép rời khỏi
    return true;
  }

}
