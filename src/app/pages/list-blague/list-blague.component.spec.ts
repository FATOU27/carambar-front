import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlagueComponent } from './list-blague.component';

describe('ListBlagueComponent', () => {
  let component: ListBlagueComponent;
  let fixture: ComponentFixture<ListBlagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBlagueComponent]
    });
    fixture = TestBed.createComponent(ListBlagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
