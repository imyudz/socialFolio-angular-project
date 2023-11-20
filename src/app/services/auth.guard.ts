import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import { AuthService } from "./auth.service";
import { Inject } from "@angular/core";

export const authGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = Inject(AuthService);
  const router = Inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(["/login"]);
    return false;
  }

  return true;
};
