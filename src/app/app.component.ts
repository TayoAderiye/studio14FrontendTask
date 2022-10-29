import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'antTest';
  constructor() {
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      'assets/js/jquery-1.12.4.min.js',
      'assets/bootstrap/bootstrap.min.js',
      'assets/js/bootstrap-select.js',
      'assets/navmenu/bootsnav.js',
      'assets/animations/wow.min.js',
      'assets/owlcarousel/owl.carousel.min.js',
      'assets/bootstrap-slider/jquery.touchSwipe.min.js',
      'assets/bootstrap-slider/bootstrap-touch-slider.js',
      'assets/jquery-ui/jquery-ui.min.js',
      'assets/Video/video.popup.js',
      'assets/js/jquery.syotimer.min.js',
      'assets/js/jquery.mixitup.min.js',
      'assets/js/tab.js',
      'assets/js/main.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
