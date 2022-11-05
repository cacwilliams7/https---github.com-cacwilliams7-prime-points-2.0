import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BadgesComponent } from './components/badges/badges.component';
import { FriendsComponent } from './components/friends/friends.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { BadgeListComponent } from './components/badges/badge-list/badge-list.component';
import { BadgeItemComponent } from './components/badges/badge-item/badge-item.component';
import { BadgeItem2Component } from './components/badges/badge-item2/badge-item2.component';
import { BadgeItem3Component } from './components/badges/badge-item3/badge-item3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BadgesComponent,
    FriendsComponent,
    RewardsComponent,
    BadgeListComponent,
    BadgeItemComponent,
    BadgeItem2Component,
    BadgeItem3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
