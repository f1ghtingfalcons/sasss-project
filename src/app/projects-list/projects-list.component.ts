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
        long: 'more about this',
        images: [
          'url(assets/images/iris.jpg)'
        ]
    },{
        name: 'FitNx Camera',
        short: 'Engineering & Design',
        long: 'more about this',
        cardStateWidth: 'small-card',
        images: [
          'url(assets/images/fitnx.jpg)'
        ]
    },{
        name: 'LISIRD III',
        short: 'Software & Design',
        cardStateWidth: 'small-card',
        long: 'more about this',
        images: [
          'url(assets/images/lisird3.png)'
        ]
    },{
        name: 'Role Manager',
        short: 'Software & Design',
        cardStateWidth: 'small-card',
        long: 'more about this',
        images: [
          'url(assets/images/role-manager.png)'
        ]
    },{
        name: 'OPOC Engine',
        short: 'CAD',
        cardStateWidth: 'small-card',
        long: 'more about this',
        images: [
          'url(assets/images/OPOC.gif)'
        ]
    },{
        name: 'This Site',
        short: 'Software & Design',
        cardStateWidth: 'small-card',
        long: 'more about this',
        images: [
          'url(assets/images/this-site.PNG)'
        ]
    },{
        name: 'Optical Cavity Resonator',
        short: 'DOE & Analysis',
        cardStateWidth: 'small-card',
        long: 'more about this',
        images: [
          'url(assets/images/resonator.png)'
        ]
    },{
        name: 'Guitar Amplifier Circuit',
        short: 'DOE & Analysis',
        cardStateWidth: 'small-card',
        long: 'more about this',
        images: [
          'url(assets/images/wah.png)'
        ]
    },{
        name: 'RC Mouse Mouse Car',
        short: 'CAD & Prototyping',
        cardStateWidth: 'small-card',
        long: 'more about this',
        images: [
          'url(assets/images/mouse.png)',
          'url(assets/images/mouse_draw.png)'
        ]
    }];
}
