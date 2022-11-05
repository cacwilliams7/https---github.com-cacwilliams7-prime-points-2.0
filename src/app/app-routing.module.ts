import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeItemComponent } from './components/badges/badge-item/badge-item.component';
import { BadgeItem2Component } from './components/badges/badge-item2/badge-item2.component';
import { BadgeItem3Component } from './components/badges/badge-item3/badge-item3.component';
import { BadgesComponent } from './components/badges/badges.component';
import { FriendsComponent } from './components/friends/friends.component';
import { RewardsComponent } from './components/rewards/rewards.component';

const routes: Routes = [
  {path: 'badges', component: BadgesComponent},
  {path: 'rewards', component: RewardsComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'benefits', component: BadgesComponent},
  {path: 'badge-item', component: BadgeItemComponent},
  {path: 'badge-item2', component: BadgeItem2Component},
  {path: 'badge-item3', component: BadgeItem3Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }