import {Route} from '@angular/router';
import {Login} from "@waldent-panels-front/ui";
import {Dashboard} from "./features/dashboard/dashboard";
import {Advertisement} from "./features/advertisement/advertisement";
import {NewAdvertisementRequest} from "./features/advertisement/new-advertisement-request/new-advertisement-request";

export const appRoutes: Route[] = [
  {path: 'sign-in', component: Login},
  {path: 'dashboard', component: Dashboard},
  {path: 'advertisement', component: Advertisement},
  {path: 'advertisement/new', component: NewAdvertisementRequest},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

// {path: 'advertisement/reject', component: RejectAdvertisement},
// {path: 'advertisement/active', component: ActiveAdvertisement},
// {path: 'advertisement/details', component: AdvertisementDetails},
// {path: 'advertisement/edit', component: AddEditAdvertisement},
// {path: 'advertisement/add', component: AddEditAdvertisement},
