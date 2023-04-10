import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotyComponent } from './goty.component';

describe('GotyComponent', () => {
  let component: GotyComponent;
  let fixture: ComponentFixture<GotyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
