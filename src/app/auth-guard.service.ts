import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
/**
 * Created by TeK7_Sys30 on 15-05-2017.
 */

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {


    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        this.authService.isAuthenticated().then((authenticated) => {
            if (authenticated) {
                return true;
            }else  {
                this.router.navigate(['/']);
            }
        });
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }







}
