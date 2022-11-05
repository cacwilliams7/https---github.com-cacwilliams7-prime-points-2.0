import { Component, OnInit } from '@angular/core';
import { Badge } from '../badge.model';
import { BadgeService } from '../badge.service';

@Component({
  selector: 'app-badge-item',
  templateUrl: './badge-item.component.html',
  styleUrls: ['./badge-item.component.css']
})
export class BadgeItemComponent implements OnInit {

  bdgService: BadgeService = new BadgeService
  constructor() { }

  ngOnInit(): void {
    const badgeInQuestion = this.bdgService.getBadgeInQuestion()
    console.log(badgeInQuestion)
  }

}
