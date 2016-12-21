import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
    skills: {}[] = [{
      title: 'Design & Engineering',
      color: '#4CAF50',
      image: 'assets/icons/compass.svg',
      description: 'The simplest solution is ussually the correct one when its done right. This rapid prototyping, gathering customer feedback, and designing and running tests to validate design choices. I have used my knowledge and experience in engineering and scientific disciplines to create novel designs including the design of an electronic guitar amplifier, optical resonator cavity, remote control car, drone tracking device, wireless camera and more.'
    },{
      title: 'Software Development',
      color: '#FF9800',
      image: 'assets/icons/coding.svg',
      description: 'Over 8 years of software experience has given me a wide range of programming skills in a multitude of languages. I have worked with everything from low level machine code to object oriented C# on projects ranging from memory optimization to game design.'
    },{
      title: 'CAD',
      color: '#F44336',
      image: 'assets/icons/cad.svg',
      description: 'I\'m experienced with creating SolidWorks components and assemblies and have used this technology for design and experimentation in a variety of projects. I also have experience validating designs with Finite Element Analysis using ABAQUS.'
    },{
      title: 'DOE & Analysis',
      color: '#2196F3',
      image: 'assets/icons/data.svg',
      description: 'Much of my physics background and a large part of the design process is running experiments and understanding the results. I have experience designing experiments, collecting data, and presenting the results to technical audiences.'
    }]
}
