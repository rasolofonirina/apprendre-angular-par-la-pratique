import { Routes } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'members', component: MemberListComponent },
  { path: 'events', component: EventListComponent },
  { path: '', redirectTo: '/members', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
