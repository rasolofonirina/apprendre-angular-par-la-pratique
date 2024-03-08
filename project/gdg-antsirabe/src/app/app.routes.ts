import { Routes } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { EventListComponent } from './events/event-list/event-list.component';

export const routes: Routes = [
  { path: 'members', component: MemberListComponent },
  { path: 'events', component: EventListComponent },
];
