import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.sass'],
    animations: [
        trigger('cardStateWidth', [
            state('large-card', style({ flex: '0 0 100%', maxWidth: '100%' })),
            transition('small-card => large-card', animate('225ms 50ms ease-in-out')),
            transition('large-card => small-card', animate('195ms 100ms ease-in-out'))
        ])
    ]
})
export class ProjectsListComponent {
    projectList: {}[] = [{
        name: 'UAV Tracking for Laser Spectroscopy',
        short: 'Engineering & Design',
        cardStateWidth: 'small-card',
        long: ['A joint project between DARPA, NIST and the University of Colorado Boulder to design a remote gas sensing platform based on dual-comb laser spectroscopy. I worked on the design and implementation of a drone tracking system and a control scheme for a 2-axis gimbal. I was part of a graduate student design team that researched and developed a tracking system from scratch under the direction of a graduate advisor. We then integrated this tracking system with a 2-axis gimbal and created control software to control the gimbal actions such that they followed the drone.',
                '',
                ''],
        images: [
          'url(assets/images/iris.jpg)'
        ]
    },{
        name: 'FitNx Camera',
        short: 'Engineering & Design',
        long: ['A project focused on creating a prototype consumer product. The FitNx camera was a wireless camera system that users could monitor from their phone. The product was focused on fitness users who could check their form from the remote view.',
                'Our team of graduate students ran through multiple phases of ideation, rapid prototyping, and testing. We used user feedback generated from interviews to iterated and improve our design'],
        cardStateWidth: 'small-card',
        images: [
          'url(assets/images/fitnx.jpg)'
        ]
    },{
        name: 'Product Reverse Engineering',
        short: 'Design for Manufacturing',
        cardStateWidth: 'small-card',
        long: [''],
        images: [
          'url(assets/images/re_schematic.png)'
        ]
    },{
        name: 'Novel Soldering Iron Manufacturing Design and Review',
        short: 'Design for Manufacturing',
        cardStateWidth: 'small-card',
        long: [''],
        images: [
          'url(assets/images/iron.png)'
        ]
    },{
        name: 'LISIRD III',
        short: 'Software & Design',
        cardStateWidth: 'small-card',
        long: ['The LASP Interactive Solar Irradiance Data Center is a website that allows access to datasets created by LASP and similar institutions.'],
        images: [
          'url(assets/images/lisird3.png)'
        ]
    },{
        name: 'Role Manager',
        short: 'Software & Design',
        cardStateWidth: 'small-card',
        long: ['The Role Manager is an internal tool created to allow managers to manage computer access to their groups and resources. I designed the site interface and backend. I also was the software lead on the project and was in charge of maintaining the code and allocating work.'],
        images: [
          'url(assets/images/role-manager.png)'
        ]
    },{
        name: 'OPOC Engine',
        short: 'CAD',
        cardStateWidth: 'small-card',
        long: ['Design of a CAD assembly of an Opposed-Piston Opposed-Cylinder (OPOC) engine.'],
        images: [
          'url(assets/images/OPOC.gif)'
        ]
    },{
        name: 'This Site',
        short: 'Software & Design',
        cardStateWidth: 'small-card',
        long: ['I created this site to keep track of my projects and accomplishments. All of the art, projects, and content are my origonal creations. It is based on the Angular 2 framework using Typescript. Thanks for taking the time to explore!'],
        images: [
          'url(assets/images/this-site.PNG)'
        ]
    },{
        name: 'Optical Cavity Resonator',
        short: 'DOE & Analysis',
        cardStateWidth: 'small-card',
        long: [''],
        images: [
          'url(assets/images/resonator.png)'
        ]
    },{
        name: 'Guitar Amplifier Circuit',
        short: 'DOE & Analysis',
        cardStateWidth: 'small-card',
        long: ['Worked with another physics student to design and implement a guitar \'Wah\' effect pedal. This project included design and build of the circuit followed by experiments to characterize its response.'],
        images: [
          'url(assets/images/wah.png)'
        ]
    },{
        name: 'RC Mouse Mouse Car',
        short: 'CAD & Prototyping',
        cardStateWidth: 'small-card',
        long: ['This was my first foray into computer aided design. The project was to create an interesting body for a remote control chassis. We created a hybrid Mouse-Mouse that was a combination of a computer mouse and a live mouse.',
        'Our car was then 3D printed by an outside company and fit to our RC chassis without needing any modifications. This project included full design documents for our body. We also had to model the chassis and model the mating of the two in AutoCAD.'],
        mainImage:  'url(assets/images/mouse.png)',
        images: [
          'url(assets/images/mouse.png)',
          'assets/images/mouse_draw.png'
        ]
    }];
}
