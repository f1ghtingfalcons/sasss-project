import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {
  ngOnInit() {
     const url = 'https://platform.linkedin.com/badges/js/profile.js';
     let node = document.createElement('script');
     node.src = url;
     node.type = 'text/javascript';
     node.async = true;
     node.charset = 'utf-8';
     document.getElementsByTagName('head')[0].appendChild(node);
  }

}
