import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theday',
  templateUrl: './theday.component.html',
  styleUrls: ['./theday.component.scss']
})
export class ThedayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.playAudio();
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "./assets/h1.mp3";
    audio.load();
    audio.play();  
    }


}
