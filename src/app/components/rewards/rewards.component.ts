import { Component, OnInit } from '@angular/core';
import { Reward } from './reward.model';
@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})

export class RewardsComponent implements OnInit {

  rewards:Reward[] = [
    new Reward(1, "Xbox", "$10 Xbox Gift Card", "assets/rewards/xbox.png",100),
    new Reward(2, "Xbox", "$25 Xbox Gift Card", "assets/rewards/xbox.png",250),
    new Reward(3, "Xbox", "$50 Xbox Gift Card", "assets/rewards/xbox.png",500),
    new Reward(4, "Amazon", "$10 Amazon Gift Card", "assets/rewards/amazon.png",100),
    new Reward(5, "Amazon", "$25 Amazon Gift Card", "assets/rewards/amazon.png",250),
    new Reward(6, "Amazon", "$50 Amazon Gift Card", "assets/rewards/amazon.png",500),
    new Reward(7, "Grubhub", "$10 GrubHub Gift Card", "assets/rewards/grubhub.jpeg",100),
    new Reward(8, "Grubhub", "$25 GrubHub Gift Card", "assets/rewards/grubhub.jpeg",250),
    new Reward(9, "Grubhub", "$50 GrubHub Gift Card", "assets/rewards/grubhub.jpeg",500),
    new Reward(10, "Cruise", "Carnival Cruise Sweepstakes", "assets/rewards/cruise.png",1000),
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
