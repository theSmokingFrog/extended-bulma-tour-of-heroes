import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/core/models';
import { HeroService } from '@app/core/services';
import { HeroDeletionChannel } from '@app/modules/heroes/services/hero-deletion-channel.service';

@Component({
  selector: 'app-confirm-hero-deletion-modal',
  templateUrl: './confirm-hero-deletion-modal.component.html', styleUrls: ['./confirm-hero-deletion-modal.component.scss']
})
export class ConfirmHeroDeletionModalComponent implements OnInit {

  private heroToDelete: Hero;

  constructor(private heroService: HeroService, private deletionChannel: HeroDeletionChannel) {
  }

  ngOnInit() {
    this.deletionChannel.observable().subscribe({
      next: hero => this.resolve(hero)
    });
  }

  private resolve(hero: Hero) {
    this.heroToDelete = hero;
  }

  public confirm() {
    this.heroService.deleteHero(this.heroToDelete).subscribe({
      complete: () => this.reset()
    });
  }

  public reset() {
    this.deletionChannel.clear();
  }

  public get deletionTranslateParams() {
    return {
      heroName: this.heroToDelete.name, heroId: this.heroToDelete.id
    };
  }
}
