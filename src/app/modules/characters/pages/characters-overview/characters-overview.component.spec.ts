import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersOverviewComponent } from './characters-overview.component';

describe('HeroesOverviewComponent', () => {
  let component: CharactersOverviewComponent;
  let fixture: ComponentFixture<CharactersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersOverviewComponent]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
