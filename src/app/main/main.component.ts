import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
    skills: {}[] = [{
      title: 'Design',
      image: 'assets/icons/data.svg',
      description: 'Some Analysis'
    },{
      title: 'Engineering',
      image: 'assets/icons/data.svg',
      description: 'Some Analysis'
    },{
      title: 'CAD',
      image: 'assets/icons/data.svg',
      description: 'Some Analysis'
    },{
      title: 'Software',
      image: 'assets/icons/data.svg',
      description: 'Some Analysis'
    },{
      title: 'Analysis',
      image: 'assets/icons/data.svg',
      description: 'Some Analysis'
    },{
      title: 'Something Else',
      image: 'assets/icons/data.svg',
      description: 'Some Analysis'
    }]
}
