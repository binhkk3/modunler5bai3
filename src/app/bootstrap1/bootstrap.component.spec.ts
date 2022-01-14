import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootchapComponent } from './bootchap.component';

describe('BootchapComponent', () => {
  let component: BootchapComponent;
  let fixture: ComponentFixture<BootchapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootchapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootchapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
