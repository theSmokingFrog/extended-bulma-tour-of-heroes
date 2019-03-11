import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Hero } from '@app/core/models';
import { HeroService } from '@app/core/services';

@Component({
  selector:    'app-confirm-hero-deletion-modal',
  templateUrl: './confirm-hero-deletion-modal.component.html',
  styleUrls:   ['./confirm-hero-deletion-modal.component.scss']
})
export class ConfirmHeroDeletionModalComponent implements OnInit, OnChanges {

  @Input() public heroToDelete: Hero = null;
  @Output() private heroToDeleteChange: EventEmitter<Hero> = new EventEmitter();

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  public confirm() {
    this.heroService.deleteHero(this.heroToDelete).subscribe({
      complete: () => this.reset()
    });
  }

  public reset() {
    this.heroToDeleteChange.emit(null);
  }
}
