import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared',
  imports: [CommonModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss',
})
export class SharedComponent {
  /**
   * toto hihi
   *
   * @description
   * test
   *
   * dfsfd
   */
  public toto = input.required<string>();
}
