import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMesaComponent } from './nav-mesa.component';

describe('NavMesaComponent', () => {
  let component: NavMesaComponent;
  let fixture: ComponentFixture<NavMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
