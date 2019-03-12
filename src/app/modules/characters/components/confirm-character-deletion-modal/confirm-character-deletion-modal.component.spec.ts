import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCharacterDeletionModalComponent } from './confirm-character-deletion-modal.component';

describe('ConfirmHeroDeletionModalComponent', () => {
  let component: ConfirmCharacterDeletionModalComponent;
  let fixture: ComponentFixture<ConfirmCharacterDeletionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmCharacterDeletionModalComponent]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCharacterDeletionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
