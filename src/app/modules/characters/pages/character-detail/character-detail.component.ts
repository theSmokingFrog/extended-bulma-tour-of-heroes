import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '@app/core/services';
import { Character } from '@app/core/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './character-detail.component.html',
  styleUrls:   ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public character: Character;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private location: Location, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.characterService.getCharacter(id)
        .subscribe(character => this.character = character);
  }

  goBack() {
    this.location.back();
  }

  doSave() {
    this.characterService.updateCharacter(this.character).subscribe({
      complete: () => this.router.navigate(['/characters']),
      error:    err => this.toastr.error(err.message)
    });
  }
}
