import {Route} from '@angular/router';
import {Login} from "@waldent-panels-front/ui";
import {Dashboard} from "./features/dashboard/dashboard";
import {RejectAdvertisement} from "./features/advertisement/reject-ad/reject-advertisement";
import {ActiveAdvertisement} from "./features/advertisement/active-ad/active-advertisement/active-advertisement";

export const appRoutes: Route[] = [
  {path: 'sign-in', component: Login},
  {path: 'dashboard', component: Dashboard},
  {path: 'advertisement/reject', component: RejectAdvertisement},
  {path: 'advertisement/active', component: ActiveAdvertisement},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
