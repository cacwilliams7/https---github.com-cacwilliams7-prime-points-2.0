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
    console.log(this.badgeService.getBadgeInQuestion())
    console.log(bdg.name)
    console.log(bdg.description)
    console.log(bdg.imagePath)
    console.log(bdg.earnedDate)

  }

  ngOnInit(): void {
  }

}
