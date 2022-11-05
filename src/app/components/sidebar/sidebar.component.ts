import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isActive = 'active'
  constructor(private route: ActivatedRoute) { 
  }

  setActive(param: String) {
   if(param=="badges"){
    document.getElementById("b")?.setAttribute("class","active");
    document.getElementById("f")?.setAttribute("class","");
    document.getElementById("r")?.setAttribute("class","");
    document.getElementById("l")?.setAttribute("class","");
   }
   else if(param=="friends"){
    document.getElementById("b")?.setAttribute("class","");
    document.getElementById("f")?.setAttribute("class","active");
    document.getElementById("r")?.setAttribute("class","");
    document.getElementById("l")?.setAttribute("class","");
   }
   else if(param == "rewards"){
    document.getElementById("b")?.setAttribute("class","");
    document.getElementById("f")?.setAttribute("class","");
    document.getElementById("r")?.setAttribute("class","active");
    document.getElementById("l")?.setAttribute("class","");
   }
   else if(param=="benefits") {
    document.getElementById("b")?.setAttribute("class","");
    document.getElementById("f")?.setAttribute("class","");
    document.getElementById("r")?.setAttribute("class","");
    document.getElementById("l")?.setAttribute("class","active");
   }
  }

  ngOnInit(): void {
  }

}
