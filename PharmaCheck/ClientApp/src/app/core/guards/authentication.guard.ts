import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor() { }

    canActivate() {
        return true;
    }
}
