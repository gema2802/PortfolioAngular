import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404-page',
  templateUrl: './error404-page.component.html',
  styleUrls: ['./error404-page.component.css']
})
export class Error404PageComponent implements OnInit {
  countdown: number = 10; 
  intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {

    this.startCountdown();
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.redirectToHome();
      }
    }, 1000);
  }

  redirectToHome() {
    clearInterval(this.intervalId);
    this.router.navigate(['/']);
  }

  navigateHomeNow() {
    clearInterval(this.intervalId);
    this.router.navigate(['/']);
  }
}
