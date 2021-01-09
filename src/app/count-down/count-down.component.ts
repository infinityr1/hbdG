import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('jan 10 2021 00:00:00');
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
    if ( ((this.dDay.getTime() -new Date().getTime()) < -86399000)) {
     this.dDay.setFullYear(this.dDay.getFullYear() + 1);
     console.log(this.dDay);
     this.flag = 2;
      console.log(this.flag);
   }
  // console.log(((this.dDay.getTime() -new Date().getTime()) < -86399000));

    
    // this.dDay.setFullYear(this.dDay.getFullYear() + 1);
    //   console.log(this.dDay);
    // console.log(this.dDay.getFullYear()+1);
    // this.dDay.setFullYear(this.dDay.getFullYear()+1);
    // console.log(this.dDay);
    // console.log(this.dDay.setDate(this.dDay.getFullYear()+1)); 
    // console.log(this.dDay);
    //console.log(new Date('jan 21 2021 11:59:59').getTime() - this.dDay.getTime());
    //console.log((this.dDay.getTime() -new Date('jan 5 2021 00:32:40').getTime()));
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference) {
    //console.log(timeDifference);
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  ngOnInit() {
    this.subscription = interval(100)
      .subscribe(x => { this.getTimeDifference(); });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}