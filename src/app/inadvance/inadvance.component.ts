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
   // this.playAudio()
    // while(this.flag == true){
    //   this.playAudio()

    // }
    
 }


  playAudio(){
    let audio = new Audio();
    let audio1 = new Audio();
    let audio2 = new Audio();
    //audio.src = "../assets/v.mp3";
    //audio1.src = "../assets/v1.mp3";
    audio2.src = "./assets/v2.mp3";
    // audio.load();
    // audio.play();
    // audio1.load();
    // audio1.play();
    let i = 0;
    for (i =0;i <5;i++)
    {
      audio2.load();
      audio2.play();
      i++;
    }
    
    }

}
