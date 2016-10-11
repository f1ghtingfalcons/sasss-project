import { Component } from '@angular/core';

const PAGES: string[] = [
    'Hardware',
    'Software',
    'Experience',
    'Contact'
]

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
    pages = PAGES;
    selectedPage: string;

    onSelect( page: string): void {
        this.selectedPage = page;
    }
}
