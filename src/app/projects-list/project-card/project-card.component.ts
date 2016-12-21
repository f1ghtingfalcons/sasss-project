import { Component, 
         Input,
         trigger,
         state,
         style,
         transition,
         animate,
         keyframes,
         EventEmitter,
         Output
        } from '@angular/core';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.sass'],
    animations: [
        trigger('cardStateHeight', [
            state('small-card', style({ height: '300px' })),
            state('large-card', style({ height: '600px' })),
            transition('small-card => large-card', animate('225ms 50ms ease-in-out')),
            transition('large-card => small-card', animate('195ms 100ms ease-in-out'))
        ]),
        trigger('imageState', [
            state('full-image', style({ width: '100%' })),
            state('partial-image', style({ width: '50%' })),
            transition('full-image => partial-image', animate('300ms 500ms ease-in-out')),
            transition('partial-image => full-image', animate('300ms ease-in-out'))
        ]),
        trigger('textState', [
            state('show-text', style({ right: 0, opacity: 1 })),
            transition('hide-text => show-text', animate('300ms 700ms', keyframes([
                style({opacity: 0, right: '50%',    offset: 0}),
                style({opacity: 1, right: '-15px',  offset: 0.3}),
                style({opacity: 1, right: 0,        offset: 1.0})
            ]))),
            transition('show-text => hide-text', animate(150, keyframes([
                style({opacity: 1, right: 0,       offset: 0}),
                style({opacity: 1, right: '15px',  offset: 0.7}),
                style({opacity: 0, right: '50%',   offset: 1.0})
            ])))
        ])
    ]
})

export class ProjectCardComponent {
    @Input() name : string;
    @Input() short : string;
    @Input() long : string[];
    @Input() images : string[];
    @Input() cardStateWidth : string;
    @Output() cardStateWidthChange = new EventEmitter<string>(); 

    public cardStateHeight : string = 'small-card';
    public imageState : string = 'full-image';
    public textState : string = 'hide-text';

    public toggleState() {
        if ( this.cardStateHeight === 'small-card' ) {
            this.cardStateHeight = this.cardStateWidth = 'large-card';
            this.imageState = 'partial-image';
            this.textState = 'show-text';
        } else {
            this.cardStateHeight = this.cardStateWidth = 'small-card';
            this.imageState = 'full-image';
            this.textState = 'hide-text';
        }
        this.cardStateWidthChange.emit(this.cardStateWidth);
    }
}
