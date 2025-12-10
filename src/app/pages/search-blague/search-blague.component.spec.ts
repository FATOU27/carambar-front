import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlagueComponent } from './search-blague.component';

describe('SearchBlagueComponent', () => {
  let component: SearchBlagueComponent;
  let fixture: ComponentFixture<SearchBlagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBlagueComponent]
    });
    fixture = TestBed.createComponent(SearchBlagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
