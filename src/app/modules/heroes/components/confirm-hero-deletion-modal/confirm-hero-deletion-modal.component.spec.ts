import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmHeroDeletionModalComponent } from './confirm-hero-deletion-modal.component';

describe('ConfirmHeroDeletionModalComponent', () => {
  let component: ConfirmHeroDeletionModalComponent;
  let fixture: ComponentFixture<ConfirmHeroDeletionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmHeroDeletionModalComponent]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmHeroDeletionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
