import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDeConfidentialitateComponent } from './politica-de-confidentialitate.component';

describe('PoliticaDeConfidentialitateComponent', () => {
  let component: PoliticaDeConfidentialitateComponent;
  let fixture: ComponentFixture<PoliticaDeConfidentialitateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticaDeConfidentialitateComponent]
    });
    fixture = TestBed.createComponent(PoliticaDeConfidentialitateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
