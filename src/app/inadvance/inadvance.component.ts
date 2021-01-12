import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inadvance',
  templateUrl: './inadvance.component.html',
  styleUrls: ['./inadvance.component.scss']
})
export class InadvanceComponent implements OnInit {

  title = 'GAB';
  flag = true;

  ngOnInit() {
    //this.playAudio()    
 }


  playAudio(){
    let audio = new Audio();
    audio.src = "./assets/v2.mp3";
    audio.load();
    audio.play();    
    }

}
