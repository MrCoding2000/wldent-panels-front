import {Route} from '@angular/router';
import {Login} from "@waldent-panels-front/ui";
import {Dashboard} from "./features/dashboard/dashboard";
import {RejectAdvertisement} from "./features/advertisement/reject-ad/reject-advertisement";
import {ActiveAdvertisement} from "./features/advertisement/active-ad/active-advertisement";
import {AdvertisementDetails} from "./features/advertisement/ad-details/advertisement-details";
import {AddEditAdvertisement} from "./features/advertisement/add-edit-ad/add-edit-advertisement";

export const appRoutes: Route[] = [
  {path: 'sign-in', component: Login},
  {path: 'dashboard', component: Dashboard},
  {path: 'advertisement/reject', component: RejectAdvertisement},
  {path: 'advertisement/active', component: ActiveAdvertisement},
  {path: 'advertisement/details', component: AdvertisementDetails},
  {path: 'advertisement/edit', component: AddEditAdvertisement},
  {path: 'advertisement/add', component: AddEditAdvertisement},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
