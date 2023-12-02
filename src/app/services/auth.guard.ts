import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export const authGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    console.log("teste");
    router.navigate(["/login"]);
    return false;
  }
  return true;
};


