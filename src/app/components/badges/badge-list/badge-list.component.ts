import { Component, OnInit } from '@angular/core';
import { BadgeItemComponent } from '../badge-item/badge-item.component';
import { Badge } from '../badge.model';
import { BadgeService } from '../badge.service';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit {

  badgeService: BadgeService = new BadgeService
  badges = this.badgeService.getBadgeList()
  constructor() { }

  openBadge(bdg: Badge) {
    this.badgeService.setBadgeInQuestion(bdg)

  }

  setLink(id: number) {
    if(id==1) {
      return "/badge-item"
    }
    else if(id==5) {
      return "/badge-item2"
    }
    else if(id==7) {
      return "/badge-item3"
    }
    else{
      return "badges"
    }
  }

  ngOnInit(): void {
  }

}
