import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-unisys-angular-view-button',
  templateUrl: './unisys-angular-view-button.component.html',
  styleUrls: ['./unisys-angular-view-button.component.css']
})
export class UnisysAngularViewButtonComponent implements OnInit {
  @Input('actionList') actionList;
  @Input('context') context;
  constructor() { }

  ngOnInit() {
  }

  public clickAction(action){
    action.call(this.context);
  }

  public showCaret(){
    if (this.actionList != null) {
      let count = 0;
      this.actionList.forEach(function(entry, index) {
        if (entry.visibility === false) {
          count++;
        }
      });
      return count;
    } else {
      return 0;
    }
  }
}
