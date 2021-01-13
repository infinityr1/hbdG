import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('jan 21 2021 00:00:00');
  public dDayEnd = new Date('jan 22 2021 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;
  public flag = 0;

  private getTimeDifference() {
    if ( ((this.dDay.getTime() -new Date().getTime()) < 0)) {
     this.dDay.setFullYear(this.dDay.getFullYear() + 1);
     console.log(this.dDay);
     this.flag = 1;
     console.log(this.flag);
   }
   if ( ((this.dDayEnd.getTime() -new Date().getTime()) < 0)) {
    this.dDayEnd.setFullYear(this.dDayEnd.getFullYear() + 1);
    console.log(this.dDayEnd);
    this.flag = 0;
    console.log(this.flag);
  }
  this.timeDifference = this.dDay.getTime() - new Date().getTime();
  }

  ngOnInit() {
    this.subscription = interval(100)
      .subscribe(x => { this.getTimeDifference();});  
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
}
