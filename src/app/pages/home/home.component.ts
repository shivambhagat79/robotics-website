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

  scrollButtonClicked() {
    const wrapper = document.getElementById('wrapper');
    const scrollStep = window.innerHeight * 0.95;
    const scrollDuration = 400; // milliseconds

    const currentPosition = wrapper!.scrollTop;
    const targetPosition = currentPosition + scrollStep;

    this.animateScroll(
      wrapper!,
      currentPosition,
      targetPosition,
      scrollDuration
    );
  }
  // Animate smooth scrolling
  animateScroll(
    element: HTMLElement,
    currentPosition: number,
    targetPosition: number,
    duration: number
  ) {
    const startTime = new Date().getTime();
    const endTime = startTime + duration;

    const runAnimation = () => {
      const timestamp = new Date().getTime();
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const newPosition =
        currentPosition + (targetPosition - currentPosition) * progress;

      element.scrollTop = newPosition;

      if (timestamp < endTime) {
        requestAnimationFrame(runAnimation);
      }
    };

    runAnimation();
  }
}
