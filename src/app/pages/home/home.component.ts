import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  temp: number = 0;
  myInterval = setInterval(() => {
    const p = document.getElementsByClassName('flicker');
    // const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const randomNumber = Math.floor(Math.random() * p.length);
    for (let i = 0; i < p.length; i++) {
      p[i].setAttribute('style', 'transitionDuration:0s;');
      // p[i].style.transitionDuration = 0 + "s";
    }
    this.temp = this.temp + 1;
    if (!p[randomNumber].classList.contains('on') && this.temp < 100) {
      p[randomNumber].classList.add('on');
    } else {
      if (this.temp < 100) {
        p[randomNumber].classList.remove('on');
        p[randomNumber].classList.remove('white');
      } else {
        p[randomNumber].classList.add('white');
        p[randomNumber].classList.remove('on');
      }
    }
    if (this.temp == 600) {
      clearInterval(this.myInterval);
    }
  }, 20);
}
