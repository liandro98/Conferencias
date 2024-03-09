import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('email')){
    return true;
  }else{
    const router = inject(Router);
    return router.navigate(['login']);
    console.log('sessionStorage no está disponible en este entorno');
  }
};

export const AuthGuard = authGuard;