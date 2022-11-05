import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeItemComponent } from './components/badges/badge-item/badge-item.component';
import { BadgesComponent } from './components/badges/badges.component';
import { FriendsComponent } from './components/friends/friends.component';
import { RewardsComponent } from './components/rewards/rewards.component';

const routes: Routes = [
  {path: 'badges', component: BadgesComponent},
  {path: 'rewards', component: RewardsComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'benefits', component: BadgesComponent},
  {path: 'badge-item', component: BadgeItemComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }