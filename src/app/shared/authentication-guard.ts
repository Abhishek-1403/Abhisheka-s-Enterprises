import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.userToken.pipe(
      take(1),
      map((UserToken: any) => {
        const isAuth = !!UserToken;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
      //   tap(isAuth =>{
      //     if(!isAuth){
      //         this.router.navigate(['/login']);
      //     }
      //   })
    );
  }
}
