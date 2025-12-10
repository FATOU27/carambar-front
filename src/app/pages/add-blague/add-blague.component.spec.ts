import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlagueComponent } from './add-blague.component';

describe('AddBlagueComponent', () => {
  let component: AddBlagueComponent;
  let fixture: ComponentFixture<AddBlagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBlagueComponent]
    });
    fixture = TestBed.createComponent(AddBlagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
