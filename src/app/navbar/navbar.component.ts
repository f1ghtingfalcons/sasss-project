import { Component } from '@angular/core';

const PAGES: string[] = [
    'projects',
    'experience',
    'about'
]

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
    pages: string[] = PAGES;
    selectedPage: string;
    collapse: boolean = true;

    onSelect( page: string): void {
        this.selectedPage = page;
    }
}
