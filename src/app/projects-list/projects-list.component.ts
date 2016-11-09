import { Component } from '@angular/core';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.sass']
})
export class ProjectsListComponent {
    projectList: {}[] = [{
        name: 'Project 1',
        short: 'Description',
        long: 'more about this',
        images: [
          'url(assets/images/iris.jpg)'
        ]
    },{
        name: 'Project 1',
        short: 'Description',
        long: 'more about this',
        images: [
          'url(assets/images/iris.jpg)'
        ]
    }]
}
