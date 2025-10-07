import {Route} from '@angular/router';
import {Login} from "@waldent-panels-front/ui";
import {Dashboard} from "./features/dashboard/dashboard";
import {Advertisement} from "./features/advertisement/advertisement";

export const appRoutes: Route[] = [
  {path: 'sign-in', component: Login},
  {path: 'dashboard', component: Dashboard},
  {path: 'advertisement', component: Advertisement},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
