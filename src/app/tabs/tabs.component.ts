import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabs = [
    {
      id: 1,
      tabtitle: 'tab1',
    },
    {
      id: 2,
      tabtitle: 'tab2'
    }];
  selectedItem;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  setTab($event, tab) {
   /*  this.tabs.forEach(element => {
      if (tab.id == element.id) {
        tab.isOpened = true;
      } else {
        tab.isOpened =  false;
      }
    });
   console.log() */
   this.selectedItem = tab;
   
   
  }

}
