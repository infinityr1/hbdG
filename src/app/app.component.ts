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
  public dDay = new Date('jan 13 2021 00:00:00');
  public dDayEnd = new Date('jan 14 2021 00:00:00');
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








  // playAudio(){
  //   let audio = new Audio();
  //   let audio1 = new Audio();
  //   let audio2 = new Audio();
  //   //audio.src = "../assets/v.mp3";
  //   //audio1.src = "../assets/v1.mp3";
  //   audio2.src = "./assets/v2.mp3";
  //   // audio.load();
  //   // audio.play();
  //   // audio1.load();
  //   // audio1.play();
  //   let i = 0;
  //   for (i =0;i <5;i++)
  //   {
  //     audio2.load();
  //     audio2.play();
  //     i++;
  //   }
    
  //   }

 
}
