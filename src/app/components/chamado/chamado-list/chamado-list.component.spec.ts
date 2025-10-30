import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoListComponent } from './chamado-list.component';

describe('ChamadoListComponent', () => {
  let component: ChamadoListComponent;
  let fixture: ComponentFixture<ChamadoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamadoListComponent]
    });
    fixture = TestBed.createComponent(ChamadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
