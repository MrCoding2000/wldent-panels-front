import {Route} from '@angular/router';
import {Login} from "@waldent-panels-front/ui";
import {Dashboard} from "./features/dashboard/dashboard";

export const appRoutes: Route[] = [
  {path: 'sign-in', component: Login},
  {path: 'dashboard', component: Dashboard},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

// {path: 'advertisement/reject', component: RejectAdvertisement},
// {path: 'advertisement/active', component: ActiveAdvertisement},
// {path: 'advertisement/details', component: AdvertisementDetails},
// {path: 'advertisement/edit', component: AddEditAdvertisement},
// {path: 'advertisement/add', component: AddEditAdvertisement},
