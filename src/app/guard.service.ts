import { Injectable } from '@angular/core';
import {ActivatedRoute, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private _router:Router) {

  }

  canActivate(route:ActivatedRoute, state:RouterStateSnapshot):boolean{
    console.log('canActivate');
    alert('You are not allowed to view this page. You are redirected to Home Page');
    this._router.navigate(['/']);
    return false;
  }
}
