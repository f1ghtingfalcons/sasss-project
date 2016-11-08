import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.sass']
})
export class SkillCardComponent {
    @Input() image: string;
    @Input() title: string;
    @Input() description: string;    
}
