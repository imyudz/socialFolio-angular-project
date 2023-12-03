import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { inject } from "@angular/core";

export const authGuardFn: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    console.log("Não há token");

    console.log("teste");
    router.navigate(["/login"]);
    return of(false);
  } else {
    console.log("há token");

    return authService.isTokenActive().pipe(
      switchMap((isActive: Boolean) => {
        if (!isActive) {
          console.log("token expirado");
          router.navigate(["/login"]);
          return of(false);
        }
        console.log("token válido");
        return of(true);
      })
    );
  }
};
